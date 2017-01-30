var Account = require('./AccountModel.js');
var User = require('./UserModel.js');


// Create a new post
var user = new User({
    name: "Satya"
});

// Create a new author
var account = new Account({
    userId: "103"
});

// Join the documents
user.account = account;

user.saveAll({account: true}).then(function(result) {

});

/*
 r.db('satya_testdb').table("User02")
 {

 "id": "e68e3061-3f74-4588-a42f-5d1c4d0fdc85" ,
 "name": "Satya"

 }


 r.db('satya_testdb').table("Account02")
 {

 "id": "e64990ce-2263-4cde-9f47-40dad71d07fb" ,
 "userId": "e68e3061-3f74-4588-a42f-5d1c4d0fdc85"

 }

 */