// // eventListener = listen for spesific events to create interactive web pages events : keydown, keyup
// //          document.addEventListerner(event, callback);

// const mybox = document.getElementById("mybox");

// document.addEventListener("keydown", event => {
//     mybox.textContent = "what"
//     mybox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     mybox.textContent = "nani";
//     mybox.style.backgroundColor = "green";
// });

const mybox = document.getElementById("mybox");
const moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {

    event.preventDefault();

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;

    }
})

