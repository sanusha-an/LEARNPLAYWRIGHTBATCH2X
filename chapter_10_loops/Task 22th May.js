// Program that classifies a triangle based on its side lengths

/* let AC = 10;
let AB = 3;
let CB = 7;

if (AC === AB && AB === CB && CB === AC){
    console.log ("Equilateral Triangle");
} else if (AC === AB || AC === CB || AB === CB){
    console.log("Isosceles Triangle")
} else if (AC !== AB !== CB){
    console.log("scalene Triangle")
} */

//✅ FizzBuzz Test:
for (let i=1;i<100;i++){
    if ((i %3 ===0) && (i % 5 ===0 )){
        console.log("FizzBuzz");
    } else if (i % 3 ===0 ){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
} 
