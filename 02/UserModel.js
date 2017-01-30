var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;
var Account = require('./AccountModel.js');


var User = thinky.createModel("User02", {
    id: type.string(),
    name: type.string()
});
User.hasOne(Account, "account", "id", "userId")

module.exports = User;

