var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;

var Account = thinky.createModel("Account02", {
    id: type.string(),
    userId: type.string(),
    sold: type.number()
});

module.exports = Account;