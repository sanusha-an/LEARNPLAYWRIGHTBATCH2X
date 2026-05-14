// Single ('') and Double ("") are identical — no difference in JS.
// Backtick (``) is a template literal — supports multi-line and ${} interpolation.

let name = "Alice";
console.log('Hello ' + name);  // single quotes
console.log("Hello " + name);  // double quotes
console.log(`Hello ${name}`);  // backtick — cleaner with ${}
