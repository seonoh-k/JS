// 공부할때는 누구나 반드시 필요한것
// (실력좋은 개발자 특)
//  -> 정리를 굉장히 잘함.
//  -> Docs 참조를 열심히함.

// 설명도 설명인데 공부 방향 설계.

// 동기 전송방식(직렬연결 / 놀이동산 대기열)
//  -> 동시에 일어나는 작업.

// 비동기 전송방식(병렬연결 / 커피 주문)
//  -> 작업완료를 기다리지 않고 다른 작업을 진행할수 있음.

// 비동기 전송방식의 원리
//  -> 송/수신의 시간을 맞춘다가 기본적인 동기전송방식의 원리
//  -> 송/수신의 시간을 굳이 맞추지 않아도 됨.

// 비동기 장점
// 1. 사용자가 요청후 응답을 기다리는 동안에도 다른 작업이 가능.
// 2. 필요한 부분만 업데이트가 진행되다보니 사용자 경험(ux)이 향상
// 3.  -> 자원 사용의 효율성 증대.(리소스 관리)

// Ajax(Asynchronous JavaScript and XML)
// js를 이용해 비동기적으로 데이터를 교환하는 기술(개념)
// 동작순서
// 1. 이벤트 발생 (웹 페이지에서 사용자가 하는 행동)
// 2. js가 XMLHttpRequest라는 객체를 생성 -> 웹 서버에 요청을 보내줌
// 3. 서버는 들어온 요청을 처리
// 4. 서버가 웹 페이지에 응답을 전함
// 5. js가 응답을 처리하고 필요한 조치를 진행


// axios -> Ajax 업그레이드 버전.
//  -> js전용(서버단 언어도 js인 경우.)
// axios는 비동기 전송방식 기능을 편하게 사용할수 있게 해주는 라이브러리.
//  -> 기반은 promise
// axios는 에러처리 부분에서 ajax보다 간편함을 제공.

// Ajax와 관련된 객체, 프로퍼티
// 1. JSON(JavaSctipt Object Notation) : 데이터 교환을 위한 데이터 포맷 
// 2. YML (YAML) : JSON의 단점을 해소하기 위해 만들어진 슈퍼셋

// 실전에서의 Ajax
// xmlHttpRequest 객체 자체를 그대로 쓰는 경우는 거의 없음
// 잘 알고 가야하는 이유는 비동기 전송방식의 기본 개념 자체를 구현하고 있기 때문

// open : 서버로 보낼 Ajax 요청 형식 지정
// send : 작성된 Ajax 요청을 서버로 전달
// setRequestHeader : 헤더값 설정

// 1. Content-Type : 요청할 바디에 담아 전송할 데이터의 정보를 표현
// 2. MiME-type : 서브타입
// 3. text : text/plain, text/html, text/css, text/javascript
// 4. application : application/x-www-form-urlencode, application/json
// 5. 파일 업로드 타입 : multipart/formed-data

// 객체 상태
// readyState 
// 1. UNSET / 0 : 객체 생성 중
// 2. OPENED / 1 : OPEN 메소드가 성공적으로 실행
// 3. HEADERS_RECEIVED / 2 : 모든 요청에 대한 응답 도착
// 4. LOADING / 3 : 요청한 데이터를 처리 중
// 5. DONE / 4 : 요청한 데이터의 처리가 완료되어 응답 준비 완료

// - status : 서버의 상태 표현

// 동일출처원칙 : 같은 서버에서 요청했을 경우 타입에 큰 문제가 없을 수도 있음
// - 다른 도메인, 다른 포트로의 요청은 정확하게 처리해도 제한될 수가 있음
