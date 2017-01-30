//var thinky = require('thinky')();
var thinky = require('thinky')({db: 'satya_testdb'});
var type = thinky.type;

var User = thinky.createModel("User1", {
    id: type.string(),
    name: type.string()
});

var Account = thinky.createModel("Account1", {
    id: type.string(),
    userId: type.string(),
    sold: type.number()
});
User.hasMany(Account, "accounts", "id", "userId")

var user = new User({
    name: "satya123"
});

//create a new user
var account = new Account({
    userId: '1111'
});

user.saveAll().then(function(result) {
    console.log(result);
});





//User.get("0e4a6f6f-cc0c-4aa5-951a-fcfc480dd05a").getJoin({
//    _apply: function(seq) { return seq.count() },
//    _array: false
//}).run().then(function(user) {
//
//    /*
//     * user = {
//     *     id: "0e4a6f6f-cc0c-4aa5-951a-fcfc480dd05a",
//     *     name: "Michel",
//     *     account: 3
//     * }
//     */
//});

