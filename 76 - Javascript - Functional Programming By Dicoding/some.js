/*
.some() = Mengembalikan true jika setidaknya satu elemen dalam array memenuhi kondisi yang diberikan.

metode .some() hanya akan mengembalikan nilai boolean (true atau false). Fungsinya adalah untuk mengecek apakah setidaknya satu elemen dalam array memenuhi kondisi tertentu yang kamu definisikan dalam callback.

Jadi, hasil dari .some() akan selalu:

true: jika ada setidaknya satu elemen dalam array yang memenuhi kondisi yang ditentukan.

false: jika tidak ada elemen dalam array yang memenuhi kondisi tersebut.

array.some(callback(element, index, array), thisArg);

*/

console.log("=".repeat(100))


// Array Angka mengecek ada angka ganjil

const numbers = [2, 4, 6, 8];

// Cek apakah ada angka ganjil
const hasOddNumber = numbers.some(num => num % 2 !== 0);

console.log(hasOddNumber); 



console.log("=".repeat(100))



// mengecek ada atau tidak data yang ditentukan di array objek

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Cek apakah ada user yang berumur di atas 30
const hasUserAbove30 = users.some(user => user.age > 30);

console.log(hasUserAbove30);


console.log("=".repeat(100))

// mengecek ada atau tidaknya objek yang memiliki nested properties dan lebih dari satu kondisi

const orders = [
    { id: 1, customer: { name: 'Alice', isVIP: false }, total: 100 },
    { id: 2, customer: { name: 'Bob', isVIP: true }, total: 250 },
    { id: 3, customer: { name: 'Charlie', isVIP: false }, total: 150 }
];


const onlyVIPOrders = orders.some( items => items.customer.isVIP && items.total > 200);
// nested objek items.customer.isVIP

console.log(onlyVIPOrders)

console.log("=".repeat(100))

// multi validation level

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
    { id: 2, name: 'Phone', category: 'Electronics', price: 800, inStock: false },
    { id: 3, name: 'Shirt', category: 'Clothing', price: 30, inStock: true },
    { id: 4, name: 'Shoes', category: 'Clothing', price: 50, inStock: true }
  ];
  
  // Cek apakah ada produk di kategori Electronics dengan harga di bawah 1000 dan masih dalam stok
  const kategoriProdukHargaDibawah = products.some(product => 
    product.category === 'Electronics' && product.price < 1000 && product.inStock
  );
  
  console.log(kategoriProdukHargaDibawah);