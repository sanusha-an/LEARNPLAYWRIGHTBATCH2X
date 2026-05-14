//hoisting in const
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 5;
console.log(a); // 5

//const in a function
function testConst() {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  const b = 10;
  console.log(b); // 10
}
testConst();

//const in a block
if (true) {
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 15;
  console.log(c); // 15
}