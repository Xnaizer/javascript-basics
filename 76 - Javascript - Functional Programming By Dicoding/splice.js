// 10. .splice()
// Menambahkan, menghapus, atau mengganti elemen dalam array. Namun, ini mengubah array asli, jadi hati-hati jika ingin bekerja secara immutable.

// Contoh (Menghapus elemen):

// javascript
// Copy code
// const numbers = [1, 2, 3, 4];
// numbers.splice(1, 2); // Hapus dua elemen dari indeks ke-1
// console.log(numbers); // [1, 4]

//menghapus elemen
// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.splice(1, 1); // Menghapus 1 elemen dari indeks 1
// console.log(fruits); // Output: ["Apple", "Cherry"]

// menambahkan elemen
// let fruits = ["Apple", "Cherry"];
// fruits.splice(1, 0, "Banana"); // Menambah "Banana" di indeks 1
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// mengganti elemen
// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.splice(1, 1, "Orange"); // Mengganti elemen di indeks 1 dengan "Orange"
// console.log(fruits); // Output: ["Apple", "Orange", "Cherry"]

// Perbedaan utama antara .slice() dan .splice() adalah:

// 1. Mutasi Array Asli
// .slice(): Tidak mengubah array asli, melainkan mengembalikan array baru yang berisi elemen yang dipilih.
// .splice(): Mengubah array asli, menambah atau menghapus elemen sesuai parameter yang diberikan.
// 2. Tujuan Utama
// .slice(): Digunakan untuk menyalin bagian dari array tanpa memengaruhi array asli.
// .splice(): Digunakan untuk menambah, menghapus, atau mengganti elemen di dalam array asli.
// 3. Parameter
// .slice(start, end): start adalah indeks awal, dan end (opsional) adalah indeks sebelum elemen terakhir yang diambil. Mengambil elemen dari start hingga sebelum end.
// .splice(start, deleteCount, item1, item2, ...): start adalah indeks awal perubahan, deleteCount adalah jumlah elemen yang dihapus mulai dari start, dan item1, item2, ... adalah elemen-elemen baru yang ditambahkan.

// contoh penggunaan
// .slice()
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// let newFruits = fruits.slice(1, 3); // Mengambil elemen dari indeks 1 hingga sebelum indeks 3
// console.log(newFruits); // Output: ["Banana", "Cherry"]
// console.log(fruits); // Array asli tidak berubah: ["Apple", "Banana", "Cherry", "Date"]

// .splice()
// let fruits = ["Apple", "Banana", "Cherry", "Date"];
// fruits.splice(1, 2, "Mango", "Orange"); // Menghapus 2 elemen mulai dari indeks 1, lalu menambahkan "Mango" dan "Orange"
// console.log(fruits); // Array asli berubah: ["Apple", "Mango", "Orange", "Date"]


console.log("=".repeat(100));
// menghapus item dari daftar belanja

let shoppingList = ["Roti", "Susu", "Telur", "Keju"];
shoppingList.splice(2, 1); // Menghapus 1 item di indeks ke-2 (yaitu "Telur")
console.log(shoppingList); // Output: ["Roti", "Susu", "Keju"]


let employees = [
    { name: "Andi", position: "Manager" },
    { name: "Budi", position: "Developer" },
    { name: "Citra", position: "Designer" }
];
employees.splice(1, 1); // Menghapus 1 objek dari indeks ke-1
console.log(employees);
// Output: [{ name: "Andi", position: "Manager" }, { name: "Citra", position: "Designer" }]



console.log("=".repeat(100));
// menambahkan tugas ke jadwal kegiatan harian

let dailySchedule = ["Sarapan", "Belajar", "Makan Siang", "Olahraga"];
dailySchedule.splice(2, 0, "Pergi ke bank"); // Menambah tugas di indeks ke-2
console.log(dailySchedule); // Output: ["Sarapan", "Belajar", "Pergi ke bank", "Makan Siang", "Olahraga"]

let products = [
    { id: 1, name: "Laptop", price: 15000 },
    { id: 2, name: "Keyboard", price: 500 }
];
products.splice(1, 0, { id: 3, name: "Mouse", price: 300 }); // Menambahkan objek baru di indeks ke-1
console.log(products);
// Output: [
//   { id: 1, name: "Laptop", price: 15000 },
//   { id: 3, name: "Mouse", price: 300 },
//   { id: 2, name: "Keyboard", price: 500 }
// ]
  

console.log("=".repeat(100));
// mengganti rencana perjalanan

let travelPlan = ["Museum", "Pantai", "Gunung", "Restoran"];
travelPlan.splice(1, 2, "Mall", "Taman Kota"); // Mengganti "Pantai" dan "Gunung" dengan "Mall" dan "Taman Kota"
console.log(travelPlan); // Output: ["Museum", "Mall", "Taman Kota", "Restoran"]

let tasks = [
    { id: 101, description: "Draft proposal", dueDate: "2024-11-01" },
    { id: 102, description: "Develop prototype", dueDate: "2024-11-15" },
    { id: 103, description: "Test product", dueDate: "2024-11-20" }
];
tasks.splice(1, 1, { id: 104, description: "Update prototype", dueDate: "2024-11-18" });
console.log(tasks);
// Output: [
//   { id: 101, description: "Draft proposal", dueDate: "2024-11-01" },
//   { id: 104, description: "Update prototype", dueDate: "2024-11-18" },
//   { id: 103, description: "Test product", dueDate: "2024-11-20" }
// ]


console.log("=".repeat(100));
// Mengelola Data Tim Proyek

let teamMembers = ["Andi", "Budi", "Citra", "Dewi", "Eka"];
teamMembers.splice(1, 2, "Fajar", "Gilang"); // Menghapus "Budi" dan "Citra", lalu menggantinya dengan "Fajar" dan "Gilang"
console.log(teamMembers); // Output: ["Andi", "Fajar", "Gilang", "Dewi", "Eka"]

let inventory = [
    { id: 1, name: "Laptop", stock: 10 },
    { id: 2, name: "Monitor", stock: 0 }, // Hapus karena stok kosong
    { id: 3, name: "Mouse", stock: 5 }
];
inventory.splice(1, 1, { id: 4, name: "Keyboard", stock: 15 }); // Menghapus item stok kosong dan menggantinya
console.log(inventory);
// Output: [
//   { id: 1, name: "Laptop", stock: 10 },
//   { id: 4, name: "Keyboard", stock: 15 },
//   { id: 3, name: "Mouse", stock: 5 }
// ]
  

console.log("=".repeat(100));
// Mengupdate Daftar Tugas dengan Prioritas

let projectTasks = ["Tugas 1", "Tugas 2", "Tugas 3", "Tugas 4", "Tugas 5"];
projectTasks.splice(1, 3, "Tugas Prioritas A", "Tugas Prioritas B"); 
console.log(projectTasks); // Output: ["Tugas 1", "Tugas Prioritas A", "Tugas Prioritas B", "Tugas 5"]


console.log("=".repeat(100));