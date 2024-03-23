// variable = a container that stores a value.
//              behaves as if it were the value it contains.

//   1. declaration let x;
//   2. assignment  x = 100;


let x;
// let itu keyword, spasi nama variable

x = 100;
console.log(x)

// or 

let y = 123;
console.log(y);



let age = 25;
let price = 1.99;
let gpa = 2.1;

console.log(`umur saya adalah = `,age);
console.log(`items sold at price $${price} in just a sec`);
console.log(gpa);
console.log(`tipe data ${gpa} ini adalah`,typeof gpa);
console.log(`tipe data ${age} ini adalah`,typeof age);

console.log(`===== this is border =====`);

let firstname = `arya`;
console.log(`nama anak ini adalah ${firstname}, dan type datanya ${typeof firstname}`);

let online = true;
console.log(`internet skrg online? ${online}, dan tipe data ini adalah ${typeof online}`);

console.log("war")

let fullname1 = "Xnaizer";
let age1 = 21;
let student = false;

document.getElementById("p1").textContent = ` My Name is ${fullname1} `;
document.getElementById("p2").textContent = `I'm ${age1} years old. `;
document.getElementById("p3").textContent = `I'm a student? ${student}. I'm a Person.`;
