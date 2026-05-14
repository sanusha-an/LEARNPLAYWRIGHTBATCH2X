// ----- All Number Types in JavaScript -----

// 1. Integer (base 10)
console.log(42);

// 2. Floating-point
console.log(3.14);
console.log(0.5);
console.log(1e3);     // 1000 (exponential)

// 3. Hexadecimal (base 16) - 0x prefix
console.log(0xFF);    // 255
console.log(0x1A);    // 26

// 4. Octal (base 8) - 0o prefix
console.log(0o77);    // 63
console.log(0o10);    // 8

// 5. Binary (base 2) - 0b prefix
console.log(0b1010);  // 10
console.log(0b1111);  // 15

// 6. Exponential notation
console.log(5e2);     // 500
console.log(3e-3);    // 0.003

// 7. BigInt (numbers beyond 2^53 - 1)
console.log(9007199254740991n);
console.log(12345678901234567890n);

// 8. Special numeric values
console.log(Infinity);       // positive infinity
console.log(-Infinity);      // negative infinity
console.log(NaN);            // Not a Number

// 9. Number constants
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// 10. Negative numbers
console.log(-10);
console.log(-3.14);

// 11. Underscore separators (ES2021) - readability
console.log(1_000_000);  // 1000000
console.log(1_000.50);   // 1000.5
