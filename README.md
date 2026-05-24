# LEARNPLAYWRIGHTBATCH2X

A learning repository for Playwright automation testing with JavaScript. Covers JavaScript fundamentals needed for writing Playwright test scripts.

## Chapters

### Chapter 1: Basics (`chapter_01_Basics/`)

| File | Topic |
|------|-------|
| `01_Basics.js` | Hello World with `console.log` |
| `02_JS.js` | Variable declaration with `let` |
| `03_JS_Commands.js` | `process.platform`, `process.arch`, `process.env` |
| `04_Hotcode.js` | Control flow (`if`, `for` loop) |

### Chapter 2: JavaScript Concepts (`chapter_02_Javascripts_concepts/`)

| File | Topic |
|------|-------|
| `05_Variable.js` | Variable reassignment without `let`/`const` |
| `06_Identifiers_Rules.js` | Valid vs invalid identifier naming rules |
| `07_Identifiers_Case.js` | Naming conventions: camelCase, PascalCase, snake_case, UPPER_SNAKE_CASE, kebab-case, Hungarian Notation, and more |
| `08_Comments_Shortcut.js` | Single-line (`//`) and multi-line (`/* */`) comments, VS Code shortcuts, Windows shortcuts |

### Chapter 3: Identifiers (`chapter_03_Identifiers/`)

| File | Topic |
|------|-------|
| `09_var let const.js` | `var`, `let`, `const` — redeclaration, reassignment, and block scope differences |
| `10_Functions.js` | Basic function declaration and invocation |
| `11_var explanation.js` | `var` behavior inside blocks vs functions |
| `12_let explaination.js` | `let` block scoping |
| `13_const explaination.js` | `const` block scoping |
| `14_functionscope.js` | `var` function scoping |
| `15_let functionscope.js` | `let` function scoping |
| `16_Hoisting.js` | Hoisting behavior with `var`, `let`, and `const` |
| `17_Hosting Funtion.js` | Function expression hoisting with `var`, `let`, `const` |
| `18_let hosting.js` | `let` Temporal Dead Zone (TDZ) — error when accessing before declaration |
| `19_let hosting block.js` | `let` TDZ inside functions and blocks |
| `20_const hosting.js` | `const` Temporal Dead Zone (TDZ) — error when accessing before declaration |
| `21_Junior QA.js` | Common `console.log` mistake new QA makes during recording |

### Chapter 4: Literals (`chapter_04_Literals/`)

| File | Topic |
|------|-------|
| `22_literals.js` | Overview of all literal types: string, number, BigInt, boolean, null, undefined, object, array, function, RegExp |
| `23_null_undefined.js` | `null` vs `undefined` — key differences with `typeof`, loose/strict equality, and practical `greet()` example |
| `24_null.js` | Quick comparison of `null` vs `undefined` with `typeof` and equality checks |
| `25_All literals.js` | Examples of string, number, BigInt, hex, binary, octal, and base64 literals |
| `26_Literal_Number_all.js` | All number types: integer, float, hex, octal, binary, exponential, BigInt, Infinity, NaN, Number constants, underscore separators |
| `27_string.js` | Single quotes, double quotes, and backticks for string declaration |
| `28_Template Literals.js` | Template literals with `${}` interpolation for dynamic strings, URLs, and XPath locators |
| `29_Backtick_single_double.js` | Difference between backtick (template literal with `${}`) vs single/double quotes |

### Chapter 6: Operators (`chapter_06_operators/`)

| File | Topic |
|------|-------|
| `30_assignment operator.js` | Assignment operator (`=`) |
| `31_arithmatic operator.js` | Arithmetic operators (`+`, `-`, `*`, `/`, `%`) |
| `32_mod operator.js` | Modulus operator (`%`) |
| `33_exponetial operator.js` | Exponential operator (`**`) |
| `34_IQ.js` | Compound assignment (`+=`, `-=`) with unary `+`/`-` |
| `35_comparision operator.js` | Comparison operators (`==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`) |
| `36_loosly comparision.js` | Loose (`==`) vs strict (`===`) comparison with type coercion examples |
| `37_IQ loose strict.js` | Interview questions on loose vs strict equality |
| `38_confusing comparision.js` | Confusing comparisons due to type coercion (`[] == ![]`, `null >= 0`, `NaN == NaN`) |
| `39_logical operator.js` | Logical operators (`&&`, `\|\|`, `!`) |
| `40_string_concatenation.js` | String concatenation with `+` and `+=` |
| `41_ternary opertor.js` | Ternary operator (`? :`) for conditional expressions |
| `42_type operator.js` | `typeof` operator |
| `43_Incre Decre operator.js` | Increment/decrement — prefix (`++a`) vs postfix (`a++`) |
| `44_Null operator.js` | Nullish coalescing operator (`??`) |
| `45_IQ_Inc Dec.js` | Interview question on postfix increment |
| `47_advance IQ.js` | Advanced prefix increment expression (`++a + ++a`) |
| `Task_18 Operators` | Max of 2/3 numbers via ternary operator & increment puzzle (`a++ + ++a - --a + a-- + ++a`) |

### Chapter 7: Conditional Statements — if/else (`chapter_07_loops/`)

| File | Topic |
|------|-------|
| `48_if_else.js` | Basic if-else for voting age check |
| `49_else_if_else.js` | else-if ladder for score grading |
| `50_realtime_ifelse.js` | Nested if-else for role-based permissions |
| `51_API_if else.js` | API status code checking with else-if |
| `52_IQ_if else.js` | Truthy/falsy values in `if` conditions |
| `53_if else realtime.js` | Login auth with multiple conditions (`&&`) |
| `54_IQ if else.js` | Simple `if` without braces |
| `55_IQ2 if else.js` | Empty `if` block |

### Chapter 8: Switch Statements (`chapter_08_switch statements.js/`)

| File | Topic |
|------|-------|
| `59_switch.js` | Basic `switch` with `break` for days |
| `60_no break.js` | Fall-through behavior without `break` |
| `61_default.js` | `default` case for unmatched values |
| `62_realtime switch.js` | Real-time switch for API status codes |
| `63_switch group.js` | Grouping multiple cases together |
| `64_IQ switch.js` | Fall-through with missing `break` statements |
| `65_IQ2 switch.js` | Case order matters in switch execution |
| `66_IQ3 switch.js` | Duplicate case labels (uses first match) |
| `67_IQ4 switch.js` | Strict comparison (`===`) in switch |
| `Task 20 May.js` | `switch(true)` patterns: HTTP status categorization, test verdict, bug severity, build health, login lockout |

### Chapter 9: User Input (`chapter_09_user input/`)

| File | Topic |
|------|-------|
| `68_user input.js` | `prompt()` for user input |
| `69_node readline.js` | `readline` module for CLI input |
| `70_prompt sync.js` | `prompt-sync` package for synchronous input |

## Topics Covered

- `console.log()` output
- Variable declaration (`let`, `const`)
- Process environment commands
- Conditional statements (`if`)
- Loops (`for`)
- Identifier naming rules and conventions
- Comments in JavaScript
- Keyboard shortcuts for VS Code and Windows
- `var`, `let`, `const` differences
- Function declaration
- Variable and function scoping
- Hoisting and Temporal Dead Zone (TDZ)
- All literal types (string, number, BigInt, boolean, null, undefined, object, array, function, RegExp)
- `null` vs `undefined`
- Number systems (decimal, hex, octal, binary, exponential, BigInt)
- Template literals and string interpolation
- Single quotes vs double quotes vs backticks
- Assignment, arithmetic, modulus, and exponential operators
- Loose (`==`) vs strict (`===`) comparison and type coercion
- Logical operators (`&&`, `||`, `!`)
- String concatenation
- Ternary operator (`? :`)
- `typeof` operator
- Prefix vs postfix increment/decrement
- Nullish coalescing operator (`??`)
- `if`, `else if`, `else` conditional statements
- Nested conditionals and logical operators in conditions
- Truthy and falsy values in conditionals
- `switch` statement with `break` and fall-through
- `switch` grouping, default case, and strict comparison
- User input via `prompt()`, `readline`, and `prompt-sync`

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

## Usage

Run any file with Node.js:

```bash
node chapter_01_Basics/01_Basics.js
```
