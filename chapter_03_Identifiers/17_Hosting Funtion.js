// with var
console.log(testVar()); // undefined
var testVar = function() {
  return 5;
}
console.log(testVar()); // 5

// with let
console.log(testLet()); // ReferenceError: Cannot access 'testLet' before initialization
let testLet = function() {
  return 10;
}
console.log(testLet()); // 10

// with const
console.log(testConst()); // ReferenceError: Cannot access 'testConst' before initialization
const testConst = function() {
  return 15;
}
console.log(testConst()); // 15
