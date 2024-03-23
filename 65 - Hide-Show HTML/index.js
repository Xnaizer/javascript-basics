

const mybtn = document.getElementById("mybtn");
const myimg = document.getElementById("myimg");

// mybtn.addEventListener("click", event => {

//     if(myimg.style.display === "none"){
//         myimg.style.display = "block";
//         mybtn.textContent = "hide";
//     }
//     else{
//         myimg.style.display = "none";
//         mybtn.textContent = "show";
//     }


// });

// ini supaya ada space buat gambarnya

mybtn.addEventListener("click", event => {

    if(myimg.style.visibility === "hidden"){
        myimg.style.visibility = "visible";
        mybtn.textContent = "hide";
    }
    else{
        myimg.style.visibility = "hidden";
        mybtn.textContent = "show";
    }


});