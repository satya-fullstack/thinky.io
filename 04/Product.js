var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;
var Offer = require('./Offer.js');
var Product = thinky.createModel("Product", {
    id: type.string(),
    productName: type.string()
});

//Product.hasMany(Offer, "offer2", "id", "productId");

module.exports = Product;

