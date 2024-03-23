// NodeList = static collection of html elements by ( id, class, element)
//            can be created by using querySelectorAll()
//            similiar to an array, but no(map, filter,reduce)
//            NodeList wont update to automatically refelct changes

let btn = document.querySelectorAll(".mybtn");

// console.log(btn)

// // add html/css properties

// btn.forEach(btns => {
//     btns.style.backgroundColor = "green";
//     btns.textContent += " changed"
// })



// // click event listerner

// btn.forEach(btns =>{
//     btns.addEventListener("click",event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// })



// // mouseover + mouseout event listerner

// btn.forEach(bnts => {
//     bnts.addEventListener("mouseover", event =>{
//         event.target.style.backgroundColor = "tomato";
//     })
// })

// btn.forEach(bnts => {
//     bnts.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "green";
//     })
// })



// // add an elements

// const newbtn = document.createElement("button");
// newbtn.textContent = "btn 5";
// newbtn.classList = "mybtn";
// document.body.appendChild(newbtn);
// console.log(btn) // disini kita ga melihat ada btn5 karna ini cuma nodelist

// //tapi klo kita panggil lagi akan

// btn1 = document.querySelectorAll(".mybtn");
// console.log(btn1) // akan ada 5


//remove elements

btn.forEach(bnts =>{
    bnts.addEventListener("click", event =>{
        event.target.remove();
    })
})

//ini didlam console masih ada di nodelistnya

