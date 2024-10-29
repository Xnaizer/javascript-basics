

/*
.reduce() adalah fungsi yang digunakan untuk mengurangi array menjadi satu nilai
misalnya untuk menjumlahkan nilai-nilai dalam array atau mengakumulasikan hasil dari suatu operasi.


array.reduce((accumulator, currentValue, currentIndex, array) => {
    // operasi akumulasi
}, initialValue);

*/

const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];


function calculateTotalPrice(products) {
    /**
     * TODO:
     * Gunakan metode array immutable untuk menghitung total harga semua produk.
     */
    return products.reduce((total,item) => total + item.price , 0 );
    // disini nilai setelah koma menunjukkan mulai dari berapa operasi angka akan dilakukan, karna kita mau hasil yang sesuai, maka kita akan mulai dengan 0

}

console.log(calculateTotalPrice(sampleProducts));


console.log("=".repeat(100))

// ini contoh akumulasi atau accumulator. Akumulasi adalah kegiatan mengumpulkan atau menambah jumlah sesuatu, biasanya secara bertahap

const totalProduk = [
    { name: 'Laptop', price: 1000, quantity: 2 },
    { name: 'Phone', price: 500, quantity: 5 },
    { name: 'Shirt', price: 50, quantity: 10 },
];

function TotalIsiKeranjang(produk){
    return produk.reduce(( disinibebas, item) => disinibebas + item.quantity, 0 );
}

console.log(TotalIsiKeranjang(totalProduk));


console.log("=".repeat(100))

// Current Item / value


function tampilkanProduk (produk){
    return produk.reduce((akumulator, item) => {
        console.log(item.name);
        return akumulator;

    }, ' ' );
        
}

console.log(tampilkanProduk(totalProduk))

console.log("=".repeat(100));

// pake current index

function penomoranIndex (produk){
    return produk.reduce((bebas, item, index)=>{
        console.log(`No. Produk ke-${index} Dengan Nama Item : ${item.name}`);
        return bebas
    })
}

console.log(penomoranIndex(totalProduk));

console.log("=".repeat(100));

// menggunakan array 

function tampilkanArray (produk){
    return produk.reduce((bebas, array) => {
        console.log(array);
        return bebas
    }, ' ')
}

console.log(tampilkanArray(totalProduk))

console.log("=".repeat(100))

// Mencari Nilai Tertinggi dalam Array

const angkaSatu = [10,20,5,40,25,39,90];

const angkaTertinggi = angkaSatu.reduce((max, current) => {
    return current > max ? current : max;
}, 0);

console.log(angkaTertinggi)

console.log("=".repeat(100));

// menggabungkan kalimat array

const kalimatSatu = ['Learning', 'reduce', 'is', 'fun'];

const perkataan = kalimatSatu.reduce((result, word) => result + ' ' + word)

console.log(perkataan);

console.log("=".repeat(100));

// menjumlahkan total huruf di array

const wordsArray = ['Hello', 'World', 'JavaScript'];

const totalCharacters = wordsArray.reduce((total, word) => total + word.length, 0);

console.log(totalCharacters);

console.log("=".repeat(100));

// menghilangkan duplikasi array

const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];

const uniqueNumbers = numbers.reduce((unique, number) => {
    if (!unique.includes(number)) {
        unique.push(number);
    }
    return unique;
}, []);

console.log(uniqueNumbers);

console.log("=".repeat(100));

// menggabungkan array menjadi 1
const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const mergedArray = arrays.reduce((merged, currentArray) => merged.concat(currentArray), []);

console.log(mergedArray);

console.log("=".repeat(100))

// membuat pengelompokan data berdasarkan kategori
const items = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Shirt', category: 'Apparel' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Shoes', category: 'Apparel' },
    { name: 'Watch', category: 'Accessories' },
    { name: 'Tablet', category: 'Electronics' },
    { name: 'Jacket', category: 'Apparel' },
    { name: 'Headphones', category: 'Electronics' },
    { name: 'Socks', category: 'Apparel' },
    { name: 'Bracelet', category: 'Accessories' },
];

const groupedItems = items.reduce((group, item) => {
    const category = item.category;
    if (!group[category]) {
        group[category] = [];
    } // cek kalo belum ada group sesuai kategori maka buat grupnya sesuai array
    group[category].push(item);
    return group;
}, {});

console.log(groupedItems);
