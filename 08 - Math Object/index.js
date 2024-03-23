// math = built in object that provides a collection of properties and methods

//example 

console.log(Math.PI)

let x = 81;
let y = 2;
let z = 3.00001;

a = Math.round(x)
console.log(a)
// pembulatan angka jika 3.5 keatas maka akan 4, jika 3.5 kebawah akan menjadi 3

b = Math.floor(z)
console.log(b)
//pembulatan angka jika x.1-0,9 maka akan tercetak x

b = Math.ceil(z)
console.log(b)
// mengambil angka diatas dari angka x 3 jdi 3, 3.000001 akan menjadi 4

c = Math.trunc(z)
console.log(c)
// menghapus koma dibelakang 

d = Math.pow(x , y)
console.log(d)
// x pangkat y

e = Math.sqrt(x)
console.log(e)
//kpk paling bawah

f = Math.log(x)
console.log(f)
// logaritma

// Math.sin
// Math.cos
// Math.tan


g = Math.abs(x)
console.log(g)
// absoulute atau ini akan diubah menjadi angka positif

// Math.sign outputnya jika angka postif akan menjadi 1, negatif menjadi -1, jika angka 0 makan akan menjadi 0