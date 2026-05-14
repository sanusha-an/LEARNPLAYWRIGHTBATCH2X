// let cannot be used outside the block
let x = 10;
if (true) {
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10

// let cannot be used outside the function
function testLet() {
  let y = 30;
  console.log(y); // 30
}
testLet();
let y = 40;
console.log(y); // 40
