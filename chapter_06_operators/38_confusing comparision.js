// ----- Confusing Comparisons in JS (due to type coercion) -----

console.log(null == 0);        // false
console.log(null == undefined); // true
console.log(null >= 0);        // true  (null converts to 0 with >=)

console.log([] == false);      // true  (empty array → "" → 0, false → 0)
console.log([] == 0);          // true
console.log([1] == true);      // true  ([1] → "1" → 1, true → 1)
console.log([1, 2] == NaN);    // false

console.log(" " == 0);         // true  (" " → 0)
console.log(" " == false);     // true
console.log("\n" == 0);        // true

console.log("0" == false);     // true  ("0" → 0, false → 0)
console.log("0" == 0);         // true
console.log("0" == "");        // false

console.log(false == "");      // true  (both coerce to 0)
console.log(false == []);      // true
console.log(false == {});      // false ({} → NaN)

console.log([] == ![]);        // true  ([] == false → true)
console.log([] == []);         // false (different object references)
console.log({} == {});         // false

console.log(null == null);     // true
console.log(undefined == undefined); // true
console.log(NaN == NaN);       // false (NaN is never equal to itself)
