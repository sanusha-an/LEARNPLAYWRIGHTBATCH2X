//var is a function-scoped variable
//example
var x =5
function testVar() {
  var x = 10;
  if (true) {
    var x = 20;
    //console.log(x); // 20
  }
  //console.log(x); // 20
}
testVar();

function testVar1() {
  var x = 30;
  console.log(x); // 30
}
testVar1();

console.log(x);