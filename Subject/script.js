async function getUser() {
    const res = await fetch('https://randomuser.me/api?results=50');

    if(!res.ok) {
        throw new Error('HTTP 응답 없음 : ', res.status);
    }

    const data = await res.json();
    renderUserList(data.results);
} 

getUser();

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