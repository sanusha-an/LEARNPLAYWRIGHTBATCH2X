// JavaScript Identifier Naming Cases/Conventions

// 1. camelCase - starts lowercase, each new word capitalized
let firstName = "John";
let lastName = "Doe";
let phoneNumber = "1234567890";
let getUserData = function() {};

// 2. PascalCase - each word starts with capital letter (used for classes)
let MyClass = {};
let PersonDetails = {};
class UserAccount {}
function GetData() {}

// 3. snake_case - words separated by underscores, all lowercase
let first_name = "John";
let last_name = "Doe";
let phone_number = "1234567890";
let get_user_data = function() {};

// 4. UPPER_SNAKE_CASE - constants, all uppercase with underscores
const MAX_USERS = 100;
const API_KEY = "abc123xyz";
const DATABASE_URL = "http://localhost:3000";
const DEFAULT_TIMEOUT = 5000;

// 5. kebab-case - words separated by hyphens (NOT used in JS variables, used in HTML/CSS)
// let my-variable = 10;  // INVALID in JS
// Used in HTML attributes and CSS class names
// <div class="my-component"></div>

// 6. SCREAMING_SNAKE_CASE - all caps with underscores (alternative for constants)
const MIN_VALUE = 0;
const MAX_VALUE = 1000;
const IS_PRODUCTION = true;

// 7. Hungarian Notation - prefix indicates type (older convention, rarely used now)
let strName = "John";      // str = string
let numAge = 25;           // num = number
let boolIsActive = true;   // bool = boolean
let arrUsers = [];         // arr = array

// 8. camelCase with underscore prefix - private/internal variables
let _privateVar = "private";
let _internalData = {};
function _helperFunction() {}

// 9. $ prefix - jQuery or reactive variables (Angular, Vue)
let $userElement = document.getElementById("user");
let $formData = {};

// 10. ALL_CAPS - for immutable constants
const PI = 3.14159;
const GRAVITY = 9.8;
const YEAR_2024 = 2024;

console.log("camelCase:", firstName, lastName);
console.log("PascalCase:", MyClass, PersonDetails);
console.log("snake_case:", first_name, last_name);
console.log("UPPER_SNAKE_CASE:", MAX_USERS, API_KEY);
console.log("SCREAMING_SNAKE_CASE:", MIN_VALUE, MAX_VALUE);
console.log("Hungarian Notation:", strName, numAge, boolIsActive);
console.log("_privateVar:", _privateVar);
console.log("Constants:", PI, GRAVITY);