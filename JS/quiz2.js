function getProductById(productId) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', `https://dummyjson.com/products/${productId}`);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send();

        xhr.onreadystatechange = function() {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;

            if(xhr.status >= 200 && xhr.status < 400) {
                const json = JSON.parse(xhr.response);
                resolve(json);
            }else {
                reject(new Error(xhr.status));
            }
        };
    })
}

getProductById(1)
    .then(product => {
        console.log("상품 정보 :", product.title, product.price);
    })
    .catch(error => {
        console.log("에러 발생 :", error.message);
    })