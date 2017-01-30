var Campaign = require('./Campaign.js');
var Product = require('./Product.js');
var Offer = require('./Offer.js');


//Campaign.get("65855ae7-b32a-4f59-b874-f1e0796812d1").getJoin({offer:{offer1:true}})
//    .run().then(function(res) {
//console.log(res);
//    });




Campaign.get("65855ae7-b32a-4f59-b874-f1e0796812d1")
    .addRelation("offer")
    .run().then(function(res) {
        console.log(res);
    });


/**
 User.get("0e4a6f6f-cc0c-4aa5-951a-fcfc480dd05a").getJoin({account: {bills: true}})
 .run().then(function(user)
 */