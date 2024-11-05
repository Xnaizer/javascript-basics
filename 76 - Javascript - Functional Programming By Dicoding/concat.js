/*
.concat() digunakan untuk menggabungkan 2 atau lebih array menjadi 1



*/

// menggabungkan angka

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result = array1.concat(array2);

console.log(result); // Output: [1, 2, 3, 4, 5, 6]

console.log("=".repeat(100))

// menggabung kan string


let string1 = "Hello, ";
let string2 = "World!";
let result2 = string1.concat(string2);

console.log(result2); // Output: "Hello, World!"

console.log("=".repeat(100))

// menggabungkan jadwal aray1 array2
let jadwalPagi = ["Sarapan", "Olahraga", "Meeting"];
let jadwalSiang = ["Makan siang", "Bekerja", "Istirahat"];

let jadwalHarian = jadwalPagi.concat(jadwalSiang);
console.log(jadwalHarian);
// Output: ["Sarapan", "Olahraga", "Meeting", "Makan siang", "Bekerja", "Istirahat"]


console.log("=".repeat(100))

// menggabungkan array objek

let kontakPribadi = [
    { nama: "Andi", telepon: "0812345678" },
    { nama: "Budi", telepon: "0818765432" }
];

let kontakKerja = [
    { nama: "Pak Hadi", telepon: "0812233445" },
    { nama: "Bu Sari", telepon: "0819988776" }
];

let semuaKontak = kontakPribadi.concat(kontakKerja);
console.log(semuaKontak);
// Output: Array berisi semua kontak dari pribadi dan kerja


console.log("=".repeat(100));

// menggabungkan 3 lebih array objek

let timIT = ["Andi", "Budi", "Citra"];
let timMarketing = ["Dewi", "Eka", "Faisal"];
let timHR = ["Gita", "Hendri", "Intan"];

let semuaAnggotaTim = timIT.concat(timMarketing, timHR);
console.log(semuaAnggotaTim);
// Output: ["Andi", "Budi", "Citra", "Dewi", "Eka", "Faisal", "Gita", "Hendri", "Intan"]


console.log("=".repeat(100));

// membuat keranjang

let produk1 = { id: 1, nama: "Laptop", harga: 7000000 };
let produk2 = { id: 2, nama: "Headphone", harga: 500000 };
let produk3 = { id: 3, nama: "Keyboard", harga: 300000 };

let keranjangBelanja = []; // Keranjang belanja kosong

function tambahProdukUnik(keranjang, produk) {
    // Cek apakah produk sudah ada di keranjang berdasarkan id
    const sudahAda = keranjang.some(item => item.id === produk.id);
    return sudahAda ? keranjang : keranjang.concat(produk);
}

// Menambahkan produk satu per satu
keranjangBelanja = tambahProdukUnik(keranjangBelanja, produk1);
keranjangBelanja = tambahProdukUnik(keranjangBelanja, produk2);
keranjangBelanja = tambahProdukUnik(keranjangBelanja, produk3);
keranjangBelanja = tambahProdukUnik(keranjangBelanja, produk1); // Produk 1 tidak akan ditambahkan lagi

console.log(keranjangBelanja);

