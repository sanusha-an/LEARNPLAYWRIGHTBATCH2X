//Question 1 — HTTP Status Code Categorizer
/* let statuscode = 200

switch (true) {
    case (statuscode >= 200 && statuscode <= 299):
        console.log("success")
        break;
    case (statuscode >= 300 && statuscode <= 399):
        console.log("Redirection")
        break;
    case (statuscode >= 400 && statuscode <= 499):
        console.log("Client Error")
        break;
    case (statuscode >= 500 && statuscode <= 599):
        console.log("Server Error")
        break;
    default:
        console.log("Invalid")
        break;
} */

//Question 2 — Test Case Pass/Fail Verdict
/* let expected = "Login Successful"
let actual   = "Invalid Credentials"

switch (true){
    case (expected === "Login Successful") && (actual   === "Login Successful") :
        console.log ("✅ Test Passed")
        break;
    case (expected === "Login Successful") && (actual   === "Invalid Credentials") :
        console.log ("❌ Test Failed -- Expected: Login Successful, Got: Invalid Credentials")
        break;
    default:
        console.log("Something went wrong")
        break;
} */

// Question 3 — Bug Severity Classifier
/* let bugseverity = 5

switch (true) {
    case (bugseverity >= 9 && bugseverity <= 10):
        console.log("Critical (block release)")
        break;
    case (bugseverity >= 7 && bugseverity <= 8):
        console.log("High")
        break;
    case (bugseverity >= 4 && bugseverity <= 6):
        console.log("Medium")
        break;
    case (bugseverity >= 1 && bugseverity <= 3):
        console.log("Low")
        break;
    default:
        console.log("Invalid Score")
} */


//Question 4 — Build Health Reporter
/* let Input   = 65;

switch (true){
    case (Input === 100):
        console.log ("🟢 Green Build")
        break;
    case (Input >= 90 && Input <= 99) :
        console.log ("🟡 Stable — Investigate failures")
        break;
     case (Input >= 70 && Input <= 89) :
        console.log ("🟠 Unstable")
        break;
    case (Input < 70 ) :
        console.log ("🔴 Broken Build — Block deployment")
        break;
    default:
        console.log("Something went wrong")
        break;
} */


//Question 5 — Login Lockout After Failed Attempts
let attempt = 0;

switch (true){
    case (attempt === 0):
        console.log ("Login successful")
        break;
    case (attempt === 1) :
        console.log ("2 attempt left before lockout")
        break;
    case (attempt === 2) :
        console.log ("1 attempt left before lockout")
        break;
    case (attempt === 3) :
        console.log ("🔒 Account Locked — Contact support")
        break;
    default:
        console.log("Something went wrong")
        break;
}