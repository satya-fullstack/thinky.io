var ProductGroup = require('./ProductGroup.js');
var Product = require('./Product.js');


// Create a new post
var productGroup = new ProductGroup({
    groupName: "SOAPS"
});

// Create a new author
var product = new Product({
    productName: "Mysore Sandal"
});

// Join the documents
product.productGroup = productGroup;

product.saveAll({productGroup: true}).then(function(result) {

});

/*
 r.db('satya_testdb').table("ProductGroup")
 {
 "groupName": "SOAPS" ,
 "id": "3434c461-ea8e-4252-90d0-7994866b63e5"
 }


 r.db('satya_testdb').table("Product")
 {
 "id": "28ab8d87-1a91-4b5c-b6c1-5b7ca001e29f" ,
 "productGroupId": "3434c461-ea8e-4252-90d0-7994866b63e5" ,
 "productName": "Mysore Sandal"
 }

 */