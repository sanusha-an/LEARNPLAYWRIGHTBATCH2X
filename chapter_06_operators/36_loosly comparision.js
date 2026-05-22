// loose comparison
let a = 5;
let b = "5";

console.log("Equal:", a == b);
console.log("Strict Equal:", a === b);

console.log(0 == "");// true
console.log(0 === "");// false
console.log(false == 0);// true
console.log(false === 0);// false
console.log(false == "");// true
console.log(false === "");// false
console.log(false == null);// false
console.log(false === null);// false
console.log(false == undefined);// false
console.log(false === undefined);// false

console.log(false == NaN);// false
console.log(false === NaN);// false

console.log(true == 1);// true
console.log(true === 1);// false
console.log(true == "1");// true
console.log(true === "1");// false
console.log(true == "true");// false
console.log(true === "true");// false
console.log(true == "TRUE");// false
console.log(true === "TRUE");// false
console.log(true == "");// false
console.log(true === true);// true

console.log ("" == 0);// true
console.log ("" === 0);// false