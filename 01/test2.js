var Author = require('./AuthorModel.js');
var Post = require('./PostModel.js');

Post.get("0e4a6f6f-cc0c-4aa5-951a-fcfc480dd05a").getJoin({account: true})
    .run().then(function(user) {

        /*
         * user = {
         *     id: "0e4a6f6f-cc0c-4aa5-951a-fcfc480dd05a",
         *     name: "Michel",
         *     account: {
         *         id: "3851d8b4-5358-43f2-ba23-f4d481358901",
         *         userId: "0e4a6f6f-cc0c-4aa5-951a-fcfc480dd05a",
         *         sold: 2420
         *     }
         * }
         */
    });

