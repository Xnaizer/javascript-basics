/* 
.forEach()
Digunakan untuk mengeksekusi fungsi pada setiap elemen dalam array. Berbeda dengan map, forEach tidak mengembalikan array baru.




*/

// mengprint setiap isi array

const fruits = ['apel', 'jeruk', 'mangga'];
fruits.forEach((fruit) => {
  console.log(fruit);
});

console.log("=".repeat(100));

// mengambil setiap masing masing data lalu lakukan perubahan data

const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function mengubahDataTiapNama(produk){
    return produk.forEach((element,index) => {
        console.log(`ini perubahan ke-${index} adalah ${element.name}!`)
    });
}

mengubahDataTiapNama(sampleProducts)


console.log("=".repeat(100));

// setiap ini data diubah menjadi kali 2

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  console.log(num * 2);
});
// Output (dalam konsol): 2, 4, 6, 8


console.log("=".repeat(100));

// membuat harga setelah terkena pajak

const prices = [100, 200, 300];
const taxRate = 0.1;

prices.forEach((price) => {
  const total = price + (price * taxRate);
  console.log(`Harga: ${price}, Total dengan pajak: ${total}`);
});

console.log("=".repeat(100));

// Penilaian mahasiswa lulus atau tidak lulus

const students = [
    { name: 'Alice', score: 80 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 70 }
];

function lulusTidakLulus (arraynya){
    arraynya.forEach(item => {
        item.status = item.score >= 75 ? 'Lulus' : 'Tidak Lulus';
        console.log(`kamu ${item.name} ${item.status}`);
    })
}

lulusTidakLulus(students);

// jika dimasukkan ke dalam array

const students1 = [
    { name: 'Alice', score: 80 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 70 }
];
  
  // Tambahkan properti status berdasarkan nilai (score)
students1.forEach((student) => {
    student.status = student.score >= 75 ? 'Lulus' : 'Tidak Lulus';
});

console.log(students1);

// [
//     { name: 'Alice', score: 80, status: 'Lulus' },
//     { name: 'Bob', score: 90, status: 'Lulus' },
//     { name: 'Charlie', score: 70, status: 'Tidak Lulus' }
// ]
  

console.log("=".repeat(100));

const transactions = [
    { product: 'A', amount: 100, category: 'electronics' },
    { product: 'B', amount: 200, category: 'clothing' },
    { product: 'C', amount: 150, category: 'electronics' },
    { product: 'D', amount: 120, category: 'clothing' }
];

function totalKategori (transaksi){
    let totalElectronic = 0

    transaksi.forEach(item => {
        if (item.category === 'electronics'){
            totalElectronic += item.amount;
        
        }
    });

    return totalElectronic;

};

console.log(totalKategori(transactions));