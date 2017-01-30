var Account = require('./AccountModel.js');
var User = require('./UserModel.js');

User.get("e68e3061-3f74-4588-a42f-5d1c4d0fdc85").getJoin({account: true})
    .run().then(function(user) {

        console.log(user);
        /*
         model {
         account:
            model {
                id: 'e64990ce-2263-4cde-9f47-40dad71d07fb',
                userId: 'e68e3061-3f74-4588-a42f-5d1c4d0fdc85' },
         id: 'e68e3061-3f74-4588-a42f-5d1c4d0fdc85',
         name: 'Satya'
         }
         */



    });