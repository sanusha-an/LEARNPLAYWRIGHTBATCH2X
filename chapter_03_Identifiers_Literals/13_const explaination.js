// const cannot be used outside the block
const x = 10;
if (true) {
  const x = 20;
  console.log(x); // 20
}
console.log(x); // 10

// const cannot be used outside the function
function testConst() {
  const y = 30;
  console.log(y); // 30
}
testConst();
const y = 40;
console.log(y); // 40
