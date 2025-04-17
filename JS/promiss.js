// 프로미스를 써야하는 이유
// 1. 콜백헬 방지

// getData(function(a){
//     getMoreData(a, function(b){
//         getMoreData(b, function(c){
//             getMoreData(c, function(d){
//                 console.log("FXXK YOU");
//             })
//         })
//     })
// })

// 위 코드는 콜백헬의 예시 중 하나. 프로미스를 활용하여 극복할 수 있음

// getData()
//     .then(a => getMoreData(a)) // then으로 실행 순서 조절
//     .then(b => getMoreData(b))
//     .then(c => getMoreData(c))
//     .catch()

// 2. 예외처리 활용

// function asyncTask(successCallback, failureCallback) {
//     setTimeout(() => {
//       try {
//         // 의도적으로 에러 발생
//         throw new Error("비동기 작업 중 에러 발생!");
//       } catch (e) {
//         failureCallback(e); // 실패 콜백 호출
//       }
//     }, 1000);
//   }
  
//   try {
//     asyncTask(
//       (result) => {
//         console.log("작업 성공:", result);
//       },
//       (error) => {
//         // 이 코드는 잘 싱행됐지만
//         console.error("작업 실패:", error.message);
//       }
//     );
//   } catch (e) {
//     // 외부에서의 에러처리가 매우 힘들다는 점이 있음.
//     console.error("외부에서 잡은 에러:", e.message);
//   }

// function asyncTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("You did it!");
//             // reject(new Error("비동기 작업 중 에러 발생"));
//         }, 1000);
//     })
// }

// asyncTask()
//     .then((resolve) => console.log("작업 성공 :", resolve))
//     .catch((error) => console.log("작업 실패 :", error.message))


// 프로미스 사용해보기
// 프로미스의 처리방식
//  -> 비동기를 처리하는 함수 내부에서 Promise 객체를 생성하고 그 내부에서 비동기 처리를 구현하여 예외처리가 힘들었던 상황이나
//     콜백헬을 극복 (구조의 정의를 좀 더 디테일하게)

// 프로미스는 비동기 처리가 성공인지 실패인지에 대한 상태 정보를 가지는 객체
//  -> Promise는 콜백함수를 주로 전달 받는데 그 콜백함수는 내부에서 비동기 처리작업을 진행
//  -> 성공하면 resolve, 실패하면 reject 상태를 리턴

const promiseAjax = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(payload));
        
        xhr.onreadystatechange = function () {
        // 서버 응답 완료가 아니면 무시
            if (xhr.readyState !== XMLHttpRequest.DONE) return;

            if (xhr.status >= 200 && xhr.status < 400) {
                // resolve 메소드를 호출하면서 처리 결과를 전달
                resolve(xhr.response); // Success!
            } else {
                // reject 메소드를 호출하면서 에러 메시지를 전달
                reject(new Error(xhr.status)); // Failed...
            }
        };
    })
}
// 400번대 - 인증, 인가, 경로 문제 등 사용자 문제
// 500번대 - 개발자 문제