// while loop = repeat some code While some of condition is true

// let username = "";

// while(username === ""){
//     console.log(`you didnt enter youre name `);
// }


// DO NOT MAKE IT TRUE LAG !
// console.log(`hello ${username}`);

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt(`enter your name : `);
// }

// or use

// let username;

// do{
//     username = window.prompt(`enter your name : `);
// }while(username === "" || username === null)


// console.log(`hello ${username}`);

let loggedin = false;
let username;
let password;

while(!loggedin){
    username = window.prompt(`enter your username`);
    password = window.prompt(`enter your password`);

    if(username === "myUsername" && password === "mypassword"){
        loggedin = true;
        console.log("you are logged in");
    }
    else{
        console.log("invalid credentials! try again");
    }
}