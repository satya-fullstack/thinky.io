var Student = require('./Student.js');

// Create a new post
var student = new Student({
    name: "Satya",
    email: "satya@test.com"
});


student.save().then(function (result) {
    console.log(result);
});
