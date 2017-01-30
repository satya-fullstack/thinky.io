var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;

var Author = require('./AuthorModel.js');

// Create a model - the table is automatically created
var Post = thinky.createModel("Post101", {
    id: type.string(),
    title: type.string(),
    content: type.string(),
    idAuthor: type.string()
});

// Join the models
Post.hasMany(Author, "author", "idAuthor", "id");


module.exports = Post;