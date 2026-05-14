//let is a TDZ (Temporal Dead Zone)
//example
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
console.log(a); // 5

//let in a function
function testLet() {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  console.log(b); // 10
}
testLet();

//let in a block
if (true) {
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
  let c = 15;
  console.log(c); // 15
}

//var in a block
if (true) {
  console.log(d); // undefined
  var d = 20;
  console.log(d); // 20
}

//const in a block
if (true) {
  console.log(e); // ReferenceError: Cannot access 'e' before initialization
  const e = 25;
  console.log(e); // 25
}