var ProductGroup = require('./ProductGroup.js');
var Product = require('./Product.js');

Product.get("28ab8d87-1a91-4b5c-b6c1-5b7ca001e29f").getJoin()
    .run().then(function (product) {

        //1 Priniting complete product object
        //console.log(product);
        /*
         model {
         id: '28ab8d87-1a91-4b5c-b6c1-5b7ca001e29f',
         productGroup:
         model {
             groupName: 'SOAPS',
             id: '3434c461-ea8e-4252-90d0-7994866b63e5' },
             productGroupId: '3434c461-ea8e-4252-90d0-7994866b63e5',

          productName: 'Mysore Sandal'
         }

         */


        //2Printing product id, name and group name
        console.log(product.id); //28ab8d87-1a91-4b5c-b6c1-5b7ca001e29f
        console.log(product.productName); //Mysore Sandal
        console.log(product.productGroup.groupName); //SOAPS
    });