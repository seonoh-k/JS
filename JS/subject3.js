
function getUserById(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/users/${userId}`)
            .then(response => {
                if(!response.ok) {
                    reject(new Error("유저 정보가 없습니다."));
                }else {
                    return response.json();
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function getPostById(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/users/${userId}/posts`)
            .then(response => {
                if(!response.ok) {
                    reject(new Error("작성된 글이 없습니다."));
                }else {
                    return response.json();
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function User(user, post) {
    this.name = user.username;
    this.age = user.age;
    this.gender = user.gender;
    this.email = user.email;
    this.post = post.posts;
}

getUserById(5)
    .then(user => {
        console.log("유저 정보 :", user.username, user.age, user.gender, user.email);
        return getPostById(user.id).then(post => ({user, post}));
    })
    .then(({user, post}) => {
        console.log("작성한 게시글 수 :", post);
        const newUser = new User(user, post);
        console.log("User :", JSON.stringify(newUser, null, 2));
        return newUser;
    })
    .catch(error => {
        console.log(error.message);
    })