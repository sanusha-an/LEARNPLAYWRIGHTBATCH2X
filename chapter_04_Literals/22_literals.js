// --- String Literals ---
console.log("Hello World");  // double quotes
console.log('Hello World');  // single quotes
console.log(`Hello World`);  // backticks (template literal)

// --- Number Literals ---
console.log(42);       // integer
console.log(3.14);     // floating-point
console.log(0xFF);     // hexadecimal
console.log(0b1010);   // binary
console.log(0o77);     // octal

// --- BigInt Literal ---
console.log(9007199254740991n);

// --- Boolean Literals ---
console.log(true);
console.log(false);

// --- Null Literal ---
console.log(null);

// --- Undefined ---
console.log(undefined);

// --- Object Literal ---
console.log({ name: "Alice", age: 25 });

// --- Array Literal ---
console.log([1, 2, 3, 4, 5]);

// --- Function Literal ---
console.log(function() { return "Hi"; }());

// --- Arrow Function Literal ---
console.log((() => "Hello from arrow")());

// --- RegExp Literal ---
console.log(/hello/i.test("Hello World"));
