// // example 1 <h1>

// // step 1 create the element
// const newh1 = document.createElement("h1");

// // step 2 add attributes/properties
// newh1.textContent = "aku suka kmu";
// newh1.id = "terserahisiapapokonyaid";
// newh1.style.color = "red";
// newh1.style.textAlign = "center"

// // step 3 append element to DOM
// // document.body.append(newh1);
// // document.body.prepend(newh1)
// // document.getElementById("box1").append(newh1);
// // document.getElementById("box2").prepend(newh1);

// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newh1,box3)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newh1,box2)


// // remove html element
// // document.body.removeChild(newh1)

// example 3 <li>
// 1 create element 
const newdata1 = document.createElement("li");

// 2 add properties
newdata1.textContent = "abc";
newdata1.id = "coco";
newdata1.style.fontWeight = "bold";

// Temukan elemen <ul> dengan ID tertentu
const ulElement = document.getElementById("buah");

ulElement.appendChild(newdata1);

// mainkan dengan insertBefore, append, prepend, removechild

