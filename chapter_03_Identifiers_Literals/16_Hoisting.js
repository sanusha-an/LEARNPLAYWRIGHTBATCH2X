// Hoisting with var. Can print without declaring 
console.log(a); // undefined
var a = 5;
console.log(a); // 5

// with let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

// with const
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 15;
console.log(c); // 15
