// Counter Program

const decreasebutton = document.getElementById("decreasebutton");
const resetbutton = document.getElementById("resetbutton");
const increasebutton = document.getElementById("increasebutton");
const countlabel = document.getElementById("countlabel");

let count = 0;

increasebutton.onclick = function() {
    count++;
    countlabel.textContent = count;
}

decreasebutton.onclick = function() {
    count--;
    countlabel.textContent = count;
}


resetbutton.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}