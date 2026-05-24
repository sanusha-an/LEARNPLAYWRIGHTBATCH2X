let statuscode = 600;

if (statuscode === 200){
    console.log("Status is success")
} else if (statuscode === 400) {
    console.log ("API not found")
} else if (statuscode === 500){
    console.log ("Internal server error")
} else {
    console.log ("No status match")
}