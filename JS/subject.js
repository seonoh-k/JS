function getProduct(productId) {
    return new Promise(function(resolve, reject) {  // 빈칸 1
      // API에서 데이터 가져오기
      fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => {
          if (!response.ok) {
            // 응답이 실패한 경우
            reject(new Error('상품을 찾을 수 없습니다'));  // 빈칸 2
          } else {
            // 응답이 성공한 경우, JSON으로 변환하여 결과 반환
            return response.json();
          }
        })
        .then(data => {
          // 성공적으로 데이터를 가져온 경우
          resolve(data);  // 빈칸 3
        })
        .catch(error => {
          // 오류가 발생한 경우
          reject(error);
        });
    });
}
  
  // 함수 사용하기
  getProduct(1)
    .then(product => {
      console.log('상품 정보:', product.title, product.price);
    })
    .catch(error => {
      console.error('오류 발생:', error.message);
    });
  