let  {User,Post} = require('./user/user')

module.exports = {
    searchPost : () => {
        let post = new Post()
        post.searchPost()
            .then(result => {
                result.forEach(element => {
                    var html = "<tr><td>"+ element.id +"</td><td>"+ element.title + "</td><td>" + element.body + "</td></tr>" 
                    document.getElementById('table-post').insertAdjacentHTML('beforeend',html)
                });
                return result
            })
    },
    
    addPost : (userId, postTitle, postBody) => {
        let post = new Post();
        post.addPost(userId, postTitle, postBody)
            .then(result => {
                const newPostTable = "<tr><td>"+ result.id +"</td><td>"+ result.title + "</td><td>" + result.body + "</td></tr>"
                document.getElementById('table-new-post').insertAdjacentHTML('beforeend', newPostTable);
                return result;
            });
    }
}