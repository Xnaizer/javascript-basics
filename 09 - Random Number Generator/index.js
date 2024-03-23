// // random generator

// let ramdomNum1 = Math.random();

// console.log(ramdomNum1)

// let ramdomNum2 = Math.floor(Math.random() * 6) + 1;
// // * 6 itu maksudnya batas maksimal angka yang di random adalah sampe < 6
// // diluar ditambah + 1 baru menambahkan hasilnya ditambah menjadi x + 1

// console.log(ramdomNum2)

// const min = 50;
// const max = 100;

// // let ramdomNum3 = Math.floor(Math.random() * max) + min; ini ga bisa membuat batas
// let ramdomNum3 = Math.floor(Math.random() * (max - min)) + min;

// console.log(ramdomNum3)

const mybtn = document.getElementById("mybtn");
const container = document.getElementById("container");
const min1 = 1;
const max1 = 6;
let randomNum4;


mybtn.onclick = function() {
    randomNum4 = Math.floor(Math.random() * max1 ) + min1;
    container.textContent = randomNum4;
}



