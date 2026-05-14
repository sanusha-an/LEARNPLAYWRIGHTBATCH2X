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
console.log(null === undefined); // 