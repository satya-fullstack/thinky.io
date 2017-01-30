//var Student = require('./Student.js');
//
//
//var a=10;
//
//var r=false;
//Student.getJoin().run().then(function(result) {
//    function test(){
//        r = true;
//    }
//    //console.log(result);
//});
//
//test();
var counter = 0;
function add() {

    function plus() {counter += 1;}
    plus();
    return counter;
}
console.log(add());
//console.log(counter);


//var a=Student.get('13bf505e-aac9-4adf-9d3e-4a3995d913ce').run();

//var b=Student.get('13bf505e-aac9-4adf-9d3e-4a3995d913ce').run();

console.log(global.a);




