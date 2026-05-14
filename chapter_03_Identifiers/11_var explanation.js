//var can be used inside and outside the block
//example
var x = 10;
if (true) {
  var x = 20;
  console.log(x); // 20
}
console.log(x); // 20

// var can be used inside and outside the function
function testVar() {
  var y = 30;
  console.log(y); // 30
}
testVar();
var y = 40;
console.log(y); // 40