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
    }
    
}