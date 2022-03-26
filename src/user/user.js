
module.exports.Post = class Post {
    id
    title
    body
    constructor(){

    }



    searchPost(){
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(result => {
            return result.json()
        })
        .catch(err => {
            throw err
        })
    }

    addPost(userId, postTitle, postBody){
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                userId: userId,
                title: postTitle,
                body: postBody,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            throw err;
        })
    }

    updatePost(id, postTitle, postBody, userId) {
        const url = 'https://jsonplaceholder.typicode.com/posts/' + id
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                id,
                title: postTitle,
                body: postBody,
                userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => { return response.json() });
    }
}
