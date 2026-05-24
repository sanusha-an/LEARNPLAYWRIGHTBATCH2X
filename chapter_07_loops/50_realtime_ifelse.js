let userloggedin = false;
let role = "Editor";

if (userloggedin === true)

    if (role === "admin"){
    console.log("All permissions")
    } else if (role === "Editor"){
    console.log ("Limited Permission")
    } else if (role === "viewer"){
    console.log("Only viewing permission")
    } else {
    console.log(" No role identified")
    }

else {
console.log("you are not loggedin")
}