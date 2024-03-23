// element selector = methods used to target an manipulate HTML elements from the dom


// 1. document.getElementById()  // element or null
// 2. document.getElementsClassName() // html collection
// 3. document.getElementByTagName()  // html collection
// 4. document.querySelector()        // element or null
// 5. document.querySelectorAll()     // Nodelist

//1.

const myhead = document.getElementById("myh1");
myhead.style.backgroundColor ="yellow";
myhead.style.textAlign = "center";
console.log(myhead)

//2.

const buah = document.getElementsByClassName("buah");
console.log(buah)

buah[1].style.backgroundColor = "red";

//3.

const h4element = document.getElementsByTagName("h4");
console.log(h4element)

//4.

const elementtt = document.querySelector(".buah");
elementtt.style.backgroundColor = "green" // mengambil yang utama aja

// 5.

const buahh = document.querySelectorAll("buah");

buahh[2].style.backgroundColor = "aqua"
