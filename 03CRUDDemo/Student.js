var thinky = require('thinky')({ db: 'satya_testdb' });
var type = thinky.type;

// Create a model - the table is automatically created
var Student = thinky.createModel("Student", {
    id: type.string(),
    name: type.string(),
    email: type.string()
});

module.exports = Student;