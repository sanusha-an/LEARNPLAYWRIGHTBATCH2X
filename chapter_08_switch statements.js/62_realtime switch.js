let statuscode = 200
switch (statuscode){
    case 200:
        console.log("success")
        break;
    case 500:
        console.log("server error")
        break;
    case 400:
        console.log("Not found")
        break;
    default:
        console.log("no match")
}