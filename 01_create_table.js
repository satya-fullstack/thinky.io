//var thinky = require('thinky')();
var thinky = require('thinky')({ db: 'satya_testdb' });

var type = thinky.type;

// Create a model - the table is automatically created
var Post = thinky.createModel("Customers", {
    id: type.string(),
    name: type.string()
});