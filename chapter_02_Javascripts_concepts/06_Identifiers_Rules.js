// JavaScript Identifiers Rules
// An identifier is a name for variables, functions, classes, etc.

// Rules:
// 1. Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
// 2. Subsequent characters can be letters, digits (0-9), underscores (_), or dollar signs ($)
// 3. Identifiers are case-sensitive (myVar and myvar are different)
// 4. Cannot use reserved keywords as identifiers (if, else, for, while, etc.)
// 5. Cannot contain spaces
// 6. No special characters except _ and $

// Valid identifiers
let myVar = 10;
let _privateVar = 20;
let $dollarVar = 30;
let MyClass = {};
let myVar123 = "valid";
let CONSTANT_VALUE = 100;

// Invalid identifiers (uncomment to see errors)
// let 123invalid = 5;           // starts with digit
// let my-var = 10;              // contains hyphen
// let my var = 10;              // contains space
// let if = 5;                   // reserved keyword
// let my@var = 10;              // contains special character

console.log("Valid Identifiers:");
console.log(myVar);
console.log(_privateVar);
console.log($dollarVar);
console.log(myVar123);
console.log(CONSTANT_VALUE);