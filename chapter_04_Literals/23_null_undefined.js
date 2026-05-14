// ----- null vs undefined -----

// undefined: variable declared but no value assigned
let a;
console.log(a); // undefined

// null: explicitly set to "no value"
let b = null;
console.log(b); // null

// --- Key differences ---

console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical bug)

console.log(null == undefined);  // true  (loose equality)
console.log(null === undefined); // false (strict equality)

// Practical example
function greet(name) {
  // undefined means caller didn't pass anything
  if (name === undefined) {
    console.log("No name provided");
  } else if (name === null) {
    console.log("Name was intentionally cleared");
  } else {
    console.log("Hello, " + name);
  }
}

greet();       // undefined → "No name provided"
greet(null);   // null      → "Name was intentionally cleared"
greet("Alice");// has value → "Hello, Alice"
