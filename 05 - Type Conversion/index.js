//type conversation = change the datatype of a value to another data type
// example ; string, number, boolean


// // Strings To Number
// let age = window.prompt("How old are you?");
// age = Number(age) //


// age+=1; //klo ini aja lgsg diprint setelah dimasukkan input, maka input yg dimasukkan akan ditambahkan angka 1 dibelakangnya
// // contoh inputnya 12 maka jika age di print akan menjadi 121 karna input berupa tipe string bukan number

// console.log(age, typeof age)

let x = "pizza"; 
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log( x, typeof x);
console.log( y, typeof y);
console.log( z, typeof z);

let a = "0"; 
let b = "0";
let c = "0"; // klo didalam string kosong maka akan false

a = Number(a);
b = String(b);
c = Boolean(c);

console.log( a, typeof a);
console.log( b, typeof b);
console.log( c, typeof c);

let d = ""; 
let e = "";
let f = "";

d = Number(d);
e = String(e);
f = Boolean(f);

console.log( d, typeof d);
console.log( e, typeof e);
console.log( f, typeof f);




