//ternary operator
let age = 15;
let willgoGo = age >=18 ? "Will go Goa" : "will not go Goa"
console.log(willgoGo);

let actualstatuscode = 200;
let expectedstatuscode = 200;
if (actualstatuscode === expectedstatuscode) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}

let environment = "staging";
let url = environment === "prod" ? "https://staging.example.com" : "https://production.example.com";
console.log(url);

let isCI = false;
let browserMode = isCI === true ? "headless" : "headed";
console.log("Run Browser in", browserMode, "mode");

let temp = 45;
let tempStatus = (temp > 40) ? "High" : "Normal";
console.log("Temperature Status:", tempStatus);

let status = 400;
let statusMessage = (status < 200) ? "OK":
    status < 300 ? "not ok":
    status < 400 ? "error": "Unknown";
    
