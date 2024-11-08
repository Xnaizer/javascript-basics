// 17. .push()
// Menambahkan satu atau lebih elemen ke akhir array. Ini memodifikasi array asli.

// Contoh:

// javascript
// Copy code
// const numbers = [1, 2];
// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

console.log("=".repeat(100));
// menambahkan lgsg banyak

let teamMembers = ["Andi", "Budi"];
teamMembers.push("Citra", "Dewi");
console.log(teamMembers); // Output: ["Andi", "Budi", "Citra", "Dewi"]
// bisa juga masukin array objek

console.log("=".repeat(100));
//

let stock = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" }
];
let newProduct = { id: 3, name: "Mouse" };
  
  // Menambahkan produk hanya jika tidak ada yang sama
if (!stock.some(product => product.id === newProduct.id)) {
    // jika sebagian stock tidak ada yang sama maka push produk baru
    stock.push(newProduct);
}
console.log(stock);
// Output: [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Keyboard" },
//   { id: 3, name: "Mouse" }
// ]

console.log("=".repeat(100));
//

let mainStock = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" }
];
let additionalStock = [
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
];
  
additionalStock.forEach(newProduct => {
    if (!mainStock.some(product => product.id === newProduct.id)) {
      mainStock.push(newProduct);
    }
});

console.log(mainStock);
// Output: [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Keyboard" },
//   { id: 3, name: "Mouse" }
// ]
  

console.log("=".repeat(100));

