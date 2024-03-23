// eventListener = listen for specific events to create interactive web pages events : 
                    // cancelIdleCallback, mouseover, mouseout
                    // .addEventListener(event, callback)


const mybox = document.getElementById("mybox");
const mybtn = document.getElementById("mybtn");


// // daripada begini mending 1 line code aja
// function gantiwarna(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Yeahh 🏆"
// }

// mybox.addEventListener("click", gantiwarna)

mybtn.addEventListener("click", event => {
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "Yeahh 🏆"
});

// //arrow func
// mybox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Yeahh 🏆"
// });



// mouseover 
mybtn.addEventListener("mouseover", function(event){
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "HAYO NGAPAIN💀"
});


// mouseout 

mybtn.addEventListener("mouseout", function(event){
    mybox.style.backgroundColor = "green";
    mybox.textContent = "safe to continiue"
});
