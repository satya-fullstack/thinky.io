var Campaign = require('./Campaign.js');
var Product = require('./Product.js');

var campaign = new Campaign({
    campaignName: "Test Campaign"
});


var product = new Product({
    productName: "Test Product"
});


campaign.saveAll().then(function(result) {

});

product.saveAll().then(function(result) {

});

/*

 {

 "campaignName": "Test Campaign" ,
 "id": "65855ae7-b32a-4f59-b874-f1e0796812d1"

 }
 {

 "id": "d4794f02-cad2-4b89-ba1e-113560e10325" ,
 "productName": "Test Product"

 }

 */