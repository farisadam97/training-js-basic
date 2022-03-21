
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
}