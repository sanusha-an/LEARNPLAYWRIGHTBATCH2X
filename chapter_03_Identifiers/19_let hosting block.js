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