var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;

var Product = require('./Product.js');
var Offer = require('./Offer.js');

var Campaign = thinky.createModel("Campaign", {
    id: type.string(),
    campaignName: type.string()
});

Campaign.hasMany(Offer, "offer", "id", "campaignId");


module.exports = Campaign;

