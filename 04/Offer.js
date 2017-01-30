var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;


var Campaign = require('./Campaign.js');
var Product = require('./Product.js');

var Offer = thinky.createModel("Offer", {
    id: type.string(),
    productId: type.string(),
    campaignId: type.string()
});

//Offer.belongsTo(Campaign, "campaign", "campaignId", "id");
//Offer.belongst(Product, "sdf", "id", "productId");

module.exports = Offer;

