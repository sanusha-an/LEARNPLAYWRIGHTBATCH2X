//let is a blocked-scoped variable
//example
let x = 5;
if (true) {
  let x = 10;
  console.log(x); // 10
}
console.log(x); // 5

function testLet() {
  let y = 30;
  y = 40;
  console.log(y); // 40
}
testLet();
//let y = 40;
console.log(y); // y is not defined, because let is block-scoped and cannot be accessed outside the block where it is defined.

const z = 5;
console.log(z);
//const z=10; // cannot be changed 
console.log(z);