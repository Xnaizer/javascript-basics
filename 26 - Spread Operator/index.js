// spread operator = ... allows an iterable such as an array or a string to be expanded into seperate elements ( unpack the elements)

let numor = [1,2,3,4,5,6];
// let maximum = Math.max(numor); // ini ga bisa karna blum di spread isi dari arayynya maka akan mengguanakan =
let maximum = Math.max(...numor);
let minimum = Math.min(...numor);

console.log(maximum);
console.log(minimum);

let username = "xnaizer1";
let letters = [...username];
console.log(letters);

let username1 = "xnaizer2";
let letters1 = [...username1].join("-");
console.log(letters1);

let buah = ["a","b","c"];
let sayur = ["d","e","f"];

let gabung = [...buah,...sayur]
console.log(gabung)