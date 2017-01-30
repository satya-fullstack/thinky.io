var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;
var ProductGroup = require('./ProductGroup.js');

var Product = thinky.createModel("Product", {
    id: type.string(),
    productName: type.string(),
    productGroupId : type.string()
});

Product.belongsTo(ProductGroup, "productGroup", "productGroupId", "id")

module.exports = Product;