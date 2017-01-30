var Author = require('./AuthorModel.js');
var Post = require('./PostModel.js');


// Create a new post
var post = new Post({
    title: "Hello World!",
    content: "This is an example."
});

// Create a new author
var author = new Author({
    name: "Michel"
});

// Join the documents
post.author = author;

post.saveAll({author: true}).then(function(result) {
    /*
     post = result = {
     id: "0e4a6f6f-cc0c-4aa5-951a-fcfc480dd05a",
     title: "Hello World!",
     content: "This is an example.",
     idAuthor: "3851d8b4-5358-43f2-ba23-f4d481358901",
     author: {
     id: "3851d8b4-5358-43f2-ba23-f4d481358901",
     name: "Michel"
     }
     }
     */
});


/*
 r.db('satya_testdb').table("Post101")
 {
 "content": "This is an example." ,
 "id": "8918f705-7602-4418-9b43-89ec72f4cedf" ,
 "idAuthor": "58731ea5-d610-4e03-93ca-1c55c433a64b" ,
 "title": "Hello World!"
 }


 r.db('satya_testdb').table("Author101")
 {
 "id": "58731ea5-d610-4e03-93ca-1c55c433a64b" ,
 "name": "Michel"
 }

 */

