// how to accept user input 

//      1. easyway = window prompt
//      2. theway  = HTML textbox


// //1. easyway
// let username;
// username = window.prompt("What Your Username :")
// console.log(username)

// 2. Html textbox

let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById('mytext').value;
    document.getElementById("myh1").textContent = `hello ${username}`

}