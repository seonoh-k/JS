// 변수 지정
const URL = 'https://randomuser.me/api?results=50';
const dataFilter = document.querySelector('#filter'); // input[type=text]
const loadingEl = document.querySelector('#loading'); // 로딩 문구 
let userData = null; // 검색 기능을 위한 전역 변수

// 랜덤 유저 데이터 받아오기
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

// 유저 데이터 출력
function renderUserList(users) {
    const userList = document.querySelector('#result'); // UL

    userList.innerHTML = users.map(user => `
        <li>
            <img src=${user.picture.thumbnail}>
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        </li>
    `).join('');
}

// AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US - 국가 검색 키워드
// 검색 기능
dataFilter.addEventListener('keydown', async function(event) {
    if(event.key === 'Enter') { // 엔터키 입력 시
        const keyword = dataFilter.value.toLowerCase(); // 밸류값을 소문자로 저장 
        const firstName = userData.filter(user => user.name.first.toLowerCase() == keyword); // 키워드와 이름이 일치하는 데이터 저장
        const lastName = userData.filter(user => user.name.last.toLowerCase() == keyword);   // 키워드와 성이 일치하는 데이터 저장

        if(firstName.length > 0 && lastName.length === 0) { // 이름이 일치하는 데이터가 있다면
          renderUserList(firstName); // 데이터 출력
        }else if(firstName.length === 0 && lastName.length > 0) { // 성이 일치하는 데이터가 있다면
          renderUserList(lastName); // 데이터 출력
        }else { // 그 외 경우 전부
          const url = `https://randomuser.me/api?results=50&nat=${keyword}`; // 국가 검색
          getUser(url); // 해당하는 유저 데이터 불러오기
        }
    }
});

// 로딩 출력
function showLoading() {
    loadingEl.classList.remove('hidden');
}

// 로딩 숨김
function hideLoading() {
    loadingEl.classList.add('hidden');
}