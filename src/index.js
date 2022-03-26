let  {User,Post} = require('./user/user')

module.exports = {
    searchPost: () => {
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

    updatePost: (id, postTitle, postBody, userId) => {
        let post = new Post();
        return post.updatePost(id, postTitle, postBody, userId)
            .then(result => {
                return `<tr><td>` + result.id + `</td><td>` + result.title +
                    `</td><td>` + result.body + `</td><td>` + result.userId + `</td></tr>`;
            });
    }
}
