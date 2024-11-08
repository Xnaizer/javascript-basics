// 25. .toString()
// Mengembalikan string yang merepresentasikan array. Ini mirip dengan .join() tanpa separator (defaultnya adalah koma).

// Contoh:

// javascript
// Copy code
// const numbers = [1, 2, 3];
// const str = numbers.toString();
// console.log(str); // "1,2,3"

// angka to string

let angka = 123;
let angkaString = angka.toString();
console.log(angkaString); // "123"
console.log(typeof angkaString); // "string"

console.log("=".repeat(100));

//array to string

let array = [1, 2, 3, 4];
let arrayString = array.toString();
console.log(arrayString); // "1,2,3,4"



console.log("=".repeat(100));

// boolean ke string

let booleanTrue = true;
let booleanString = booleanTrue.toString();
console.log(booleanString); // "true"
console.log(typeof booleanString); // "string"



console.log("=".repeat(100));

// objek menjadi string 

let objek = { nama: "Kucing", umur: 3 };
console.log(objek.toString()); // "[object Object]"


console.log("=".repeat(100));

// tanggal ke string 

let tanggal = new Date();
let tanggalString = tanggal.toString();
console.log(tanggalString); // contoh: "Wed Nov 08 2023 14:30:00 GMT+0700 (WIB)"


console.log("=".repeat(100));

// objek override
let hewan = {
    nama: "Kucing",
    umur: 2,
    toString: function() {
        return `Hewan: ${this.nama}, Umur: ${this.umur} tahun`;
    }
};
console.log(hewan.toString()); // "Hewan: Kucing, Umur: 2 tahun"


console.log("=".repeat(100));

let userId = 12345;
console.log("User ID: " + userId.toString()); // "User ID: 12345"



console.log("=".repeat(100));

let pengguna = { nama: "Dani", usia: 27, kota: "Surabaya" };
let penggunaString = JSON.stringify(pengguna);
console.log(penggunaString); // '{"nama":"Dani","usia":27,"kota":"Surabaya"}'



console.log("=".repeat(100));


class User {
    constructor(nama, usia) {
        this.nama = nama;
        this.usia = usia;
    }

    toString() {
        return `User: ${this.nama}, Usia: ${this.usia}`;
    }
}

let user1 = new User("Rina", 28);
console.log(user1.toString()); // "User: Rina, Usia: 28"




console.log("=".repeat(100));

const net = require('net');

const client = new net.Socket();
client.connect(8080, 'localhost', () => {
    let pesan = { tipe: "pesan", isi: "Halo dari client!" };
    client.write(JSON.stringify(pesan)); // Mengirim pesan sebagai string JSON
});
