//var thinky = require('thinky')();
var thinky = require('thinky')({db: 'satya_testdb'});
var type = thinky.type;

// Create a model - the table is automatically created
var Role = thinky.createModel("Role", {
    id: type.string(),
    name: type.string()
});

var User = thinky.createModel("User", {
    id: type.string(),
    name: type.string(),
    idRole: type.string()
});

// Join the models
User.belongsTo(Role, "role", "idRole", "id");

// Create a new role
var role = new Role({
    name: "admin"
});

//create a new user
var user = new User({
    name: 'satya'
});
user.role = role;

user.saveAll().then(function (result) {
    console.log(user);
});

