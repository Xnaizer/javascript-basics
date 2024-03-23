// const = variable that can't be changed
// example

// let pi = 3.14
const pi = 3.14
let radius;
let circumference;

// // jikalau ada let pi = 123 disini maka nilai pi akan berubah 
// // maka akan dibuat  let pi utama menjadi const pi
// radius = window.prompt('Enter the radius of a ciecle');
// radius = Number(radius);

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent= circumference + " cm";

}

