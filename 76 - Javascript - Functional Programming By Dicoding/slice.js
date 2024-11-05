//  .slice()
// Mengambil sebagian array (shallow copy) berdasarkan indeks awal dan akhir (tidak termasuk akhir).

// Contoh:

// const numbers = [1, 2, 3, 4, 5];
// const sliced = numbers.slice(1, 4);
// console.log(sliced); // [2, 3, 4]

// Menyalin Bagian dari Array atau String
// Dengan .slice(start, end), kita bisa menyalin elemen dari indeks start hingga indeks sebelum end. Misalnya:
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(1, 4); // Hasilnya: [2, 3, 4]


// Mengabaikan Parameter end
// Jika end tidak ditentukan, .slice() akan menyalin elemen dari start hingga akhir array atau string.
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(2); // Hasilnya: [3, 4, 5]


// Menggunakan Indeks Negatif
// Kita bisa menggunakan indeks negatif untuk memulai dari akhir array atau string.
// let arr = [1, 2, 3, 4, 5];
// let slicedArr = arr.slice(-3); // Hasilnya: [3, 4, 5]


// Membuat Salinan dari Seluruh Array
// Jika .slice() dipanggil tanpa argumen, maka array atau string akan disalin sepenuhnya.
// let arr = [1, 2, 3, 4, 5];
// let copiedArr = arr.slice(); // Hasilnya: [1, 2, 3, 4, 5]


// Contoh pada String
// .slice() juga bisa digunakan pada string untuk menyalin sebagian teks:
// let text = "Hello, world!";
// let slicedText = text.slice(0, 5); // Hasilnya: "Hello"

console.log("=".repeat(100));

// contoh penggunaan harian


// simple example

let barang = ["Baju", "Celana", "Sepatu", "Tas", "Topi"];
let populer1 = barang.slice(0,4);
console.log(populer1)
console.log("=".repeat(100));

// mengambil sebagian kalimat artikel yang biasanya panjang dan menambahkan ... setelah huruf ke 65

let kalimat = "woylah mengantuk saya belajar javascript ini guys hoammmm bro, dingin tapi tidak kejamm astaga sugma banget";
let editKalimat = kalimat.slice(0,65) + "...";
console.log(editKalimat)




console.log("=".repeat(100));
let product1 = [
    { id: 1, item: "Laptop", amount: 10000 },
    { id: 2, item: "Smartphone", amount: 5000 },
    { id: 3, item: "Headphone", amount: 1500 },
    { id: 4, item: "Monitor", amount: 2500 },
];

let recentTransactions = product1.slice(-2); // Mengambil dua transaksi terakhir
console.log(recentTransactions);


console.log("=".repeat(100));

// pelajari lagi soal _

// // let daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // [1, 2, ..., 30]
// let firstWeek = daysInMonth.slice(0, 7); // Mengambil 7 hari pertama
// console.log(firstWeek); // Hasil: [1, 2, 3, 4, 5, 6, 7]


console.log("=".repeat(100));

let fileName = "dokumen.pdf";
let extension = fileName.slice(fileName.lastIndexOf(".") + 1);
console.log(extension); // Hasil: "pdf"


console.log("=".repeat(100));

// mengambil semua array kecuali array terakir

let items = ["item1", "item2", "item3", "item4"];
let newItems = items.slice(0, -1);
console.log(newItems); // Hasil: ["item1", "item2", "item3"]


console.log("=".repeat(100))

let file1 = "dokumen.pdf";
let filedd = file1.slice(fileName.lastIndexOf(".") + 1);
console.log(filedd); // Hasil: "pdf" 1 karna dari dri awal hinnga titik, jika + 2 maka akan menghapus p dari pdf
