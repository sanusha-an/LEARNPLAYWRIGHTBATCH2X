//nullish coalescing
let foo = null ?? "default string";
console.log(foo); // "default string"

let bar = "initial value" ?? "default string";
console.log(bar); // "initial value"

let amul = null;
let milk = amul ?? "milk there";
console