// if statements = if a condition is true, execute some code 
// if not, do something else

// let age = 12;


// if(age >= 18 ){
//     console.log("You Accepted to access this network");
// }
// else{
//     console.log("You're not allowed To Enter this network");
// }

// let age2 = 21;
// let sim = false;

// if(age2 >= 18 ) {
//     console.log("You Accepted to access this street");

//     if(sim) {
//         console.log("You Accepted to access this street");
//     }
//     else{
//         console.log("You NOT Accepted to access this street");
//     }
// }
// else{
//     console.log("You're not allowed To Enter this street");
// }

// let age3 = 12;

// if(age3 < 0){
//     console.log("You're age can't be below 0");
// }
// else if(age3 >= 18){
//     console.log("You aproved to access");
// }
// else if(age3 >= 100){
//     console.log("Damn boy you still alive");
// }
// else{
//     console.log("You must be 18+ to access crypto");
// }

const mytext = document.getElementById("mytext");
const mybtn = document.getElementById("mybtn");
const result = document.getElementById("result");
let age3 

mybtn.onclick = function() {
    age3 = Number(mytext.value);

        if(age3 < 0){
        result.textContent = "ga bisa 0"
        }
        else if(age3 >= 100){
            result.textContent = "gelooo masih hidup";
        }
        else if(age3 >= 18){
            result.textContent = "approved";
        }
       
        else{
            result.textContent = "WHAT YOU DOING HERE!!!!";
        }

}
