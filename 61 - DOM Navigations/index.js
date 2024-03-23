// DOM navigation = the proccess of navigating through the structure of an html document using javascript

// // .firstElementChild .lastElementChild

// const element = document.getElementById("buah");
// const anank1 = element.firstElementChild;
// anank1.style.backgroundColor = "red";
// console.log(anank1);

// const data = document.querySelectorAll("ul");

// data.forEach(data => {
//     const anakk = data.firstElementChild;
//     anakk.style.backgroundColor = "yellow"
// })


// // .nextElementSibling .previousElementSibling
// const data = document.getElementById("buah2");
// const kedua = data.nextElementSibling;
// kedua.style.backgroundColor = "blue"

// const data1 = document.getElementById("d");
// const kedua1 = data1.nextElementSibling;
// kedua1.style.backgroundColor = "red"


// .parentElement
const data = document.getElementById("h");
const paren = data.parentElement;
paren.style.backgroundColor = "blue"

// .children
const data1 = document.getElementById("buah");
const anak = data1.children;

Array.from(anak).forEach(child =>{
    child.style.backgroundColor = "red"
})






