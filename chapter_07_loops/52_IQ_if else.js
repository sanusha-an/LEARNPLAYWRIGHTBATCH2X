/* if ("hello") console.log ("string is truthy")
if (42) console.log("number is truthy")
if ({}) console.log("null is truthy")
if ([]) console.log ("empty is truthy") */


/* if ("") console.log ("wont print, falsy")
if (null) console.log ("wont print")
if (undefined) console.log("wont print")
if (NaN) console.log ("wont print")
if (0) console.log ("wont print") */

let name = NaN;
if (name){
    console.log ("hi")
}else {
    console.log("bye")
}