// Single ('') and Double ("") are identical — no difference in JS.
// Backtick (``) is a template literal — supports multi-line and ${} interpolation.

let name = "Alice";
console.log('Hello ' + name);  // single quotes
console.log("Hello " + name);  // double quotes
console.log(`Hello ${name}`);  // backtick — cleaner with ${}

//Answer 1
let number = 7;
if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

//Answer 2
let marks = 92;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80 && marks <= 89) {
  console.log("Grade: B");
} else if (marks >= 70 && marks <= 79) {
  console.log("Grade: C");
} else if (marks >= 60 && marks <= 69) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

//Answer 3
let year = 1996;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}