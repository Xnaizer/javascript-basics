// error = an object that is created to represent a problem that occurs, occur often with user input or establishing a connection.

// try{
//     console.log("hello");
//     // network errors
//     // promise rejection
//     // security errors
// }
// catch(error){
//     console.error(eror);
// }
// finally{
//     // close files
//     // close connections
//     // release resources
//     console.log("you have reac")
// }

// console.log("you have reached the end!");

try{
    const dividend = Number(window.prompt("enter a dividend : "));
    const divisor = Number(window.prompt("enter a divisor : "));

    if(divisor == 0){
        throw new Error("You cant divide by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("values must be a number");   
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
