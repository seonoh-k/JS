const URL = 'https://randomuser.me/api?results=50';
const dataFilter = document.querySelector('#filter');
const loadingEl = document.querySelector('#loading');
let userData = null;


async function getUser(url) {
    showLoading();
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error('HTTP 응답 없음 : ', res.status);
    }

    const data = await res.json();
    userData = data.results;
    renderUserList(userData);
    hideLoading();
} 

getUser(URL);

function renderUserList(users) {
    const listUl = document.querySelector('#result');

    listUl.innerHTML = users.map(user => `
        <li>
          <img src=${user.picture.thumbnail}>
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>
        </li>
    `).join('');
}

// AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US

dataFilter.addEventListener('keydown', async function(event) {
  if(event.key === 'Enter') {
    const keyword = dataFilter.value.toLowerCase();
    const firstName = userData.filter(user => user.name.first.toLowerCase() == keyword);
    const lastName = userData.filter(user => user.name.last.toLowerCase() == keyword);

    if(firstName.length > 0 && lastName.length === 0) {
      renderUserList(firstName);
    }else if(firstName.length === 0 && lastName.length > 0) {
      renderUserList(lastName);
    }else {
      const url = `https://randomuser.me/api?results=50&nat=${keyword}`;
      getUser(url);
    }
  }
});

function showLoading() {
  loadingEl.classList.remove('hidden');
}

function hideLoading() {
  loadingEl.classList.add('hidden');
}