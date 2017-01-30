var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;

var ProductGroup = thinky.createModel("ProductGroup", {
    id: type.string(),
    groupName: type.string()
});

module.exports = ProductGroup;