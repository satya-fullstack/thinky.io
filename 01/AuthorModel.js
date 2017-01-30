var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;

var Author = thinky.createModel("Author101", {
    id: type.string(),
    name: type.string()
});

module.exports = Author;

