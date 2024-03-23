// logical operator = used to combine or manipulate boolean values (true or false)

// AND = &&
// OR = ||
// NOT = !

// AND LOGICAL.
// TRUE WITH TRUE IS TRUE
// FALSE WITH FALSE IS TRUE
// FALSE AND TRUE IS FALSE
const temp = 20;

if(temp > 0 && temp<= 30){
    console.log("weather is freeze");

}
// else if(temp <= 20){
//     console.log("weather is good");
// } //ini gausa dipake karna diatas udah di pake logika and
else {
    console.log("weather is bad");
}

// OR LOGICAL
// TRUE WITH FALSE IS TRUE


const temp1 = 200;

if(temp1 > 0 || temp1 <= 30){
    console.log("weather is freeze");

}
// else if(temp <= 20){
//     console.log("weather is good");
// } //ini gausa dipake karna diatas udah di pake logika and
else {
    console.log("weather is bad");
}


// NOT LOGICAL
// CHANGE TRUE TO FALSE, AND FALSE TO TRUE

const isSunny = true;

if(!isSunny){ // look at ! on the line
    console.log("its not sunny, its cloudy")
}
else{
    console.log("its not cloudy, its sunny")
}