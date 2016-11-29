//var thinky = require('thinky')();
var thinky = require('thinky')({ db: 'satya_testdb' });

var type = thinky.type;

var Customer = thinky.createModel("Customers", {
    id: type.string(),
    name: type.string()
});

// Create a new post
var customer = new Customer({
    name: "satya"
});

customer.saveAll().then(function(result) {
  console.log(result);
});