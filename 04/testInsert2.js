var Campaign = require('./Campaign.js');
var Product = require('./Product.js');
var Offer = require('./Offer.js');

var offer = new Offer({
    productId: "d4794f02-cad2-4b89-ba1e-113560e10325",
    campaignId: "65855ae7-b32a-4f59-b874-f1e0796812d1"
});


offer.saveAll().then(function(result) {

});

/*
 {
 "campaignId": "65855ae7-b32a-4f59-b874-f1e0796812d1" ,
 "id": "05e55612-7ccc-4bcc-90b0-a922c589085f" ,
 "productId": "d4794f02-cad2-4b89-ba1e-113560e10325"
 }
 */
