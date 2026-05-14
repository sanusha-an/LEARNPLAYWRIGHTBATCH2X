//template literals
let name = "Sanusha";
let greeting = `Hello, ${name}!`;

//template literal example with url
let url = `https://api.example.com/users/${name}`;

//locator example
let locator = `//div[@class='user' and @name='${name}']`;

//logs example
console.log(greeting);
console.log(url);
console.log(locator);

//anything that is dynamic in nature template literals are preferred