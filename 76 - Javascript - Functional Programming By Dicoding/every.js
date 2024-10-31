/*
jika .some() mengembalikan nilai true jika setidaknya ada 1 yang sesuai dengan kondisi

maka .every() akan mengembalikan true jika semua kondisi sesuai

array.every(function(element, index, array) {
  // kondisi yang dicek
});
*/
console.log("=".repeat(100));

// 1. Contoh penggunaan .every() dengan array angka
const numbers = [2, 4, 6, 8];

const allPositive = numbers.every(function(num) {
    return num > 0; // apa semua angka positif ?
});

console.log(allPositive); // Output: true

console.log("=".repeat(100));

// 2. Mengecek apakah semua kata dalam array panjangnya kurang dari 5 karakter
const words = ["cat", "dog", "fish", "ant"];

const allShortWords = words.every(word => word.length < 5);

console.log(allShortWords); // Output: true

console.log("=".repeat(100));

// 3. Cek apakah semua objek dalam array memiliki properti tertentu (age)
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const allHaveAge = users.every(user => user.age !== undefined);

console.log(allHaveAge); // Output: true

console.log("=".repeat(100));

// 4. Cek apakah semua produk tersedia dalam stok
const products = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: true },
    { name: "Tablet", inStock: false }
];

const allInStock = products.every(product => product.inStock);

console.log(allInStock); // Output: false

console.log("=".repeat(100));

// 5. Validasi data form: cek apakah semua field diisi
const formData = {
    username: "user123",
    email: "user@example.com",
    password: "password123",
    confirmPassword: "password123"
};

const allFieldsFilled = Object.values(formData).every(field => field !== "");

console.log(allFieldsFilled); // Output: true

console.log("=".repeat(100));

// 6. Validasi data pengguna (userData) apakah sesuai dengan validData
const userData = {
    id: "user123",
    password: "securePass123",
    name: "John Doe"
};

// Syarat validasi
const validData = {
    id: "user123",
    password: "securePass123",
    name: "John Doe"
};

// Fungsi untuk memeriksa apakah semua data sesuai
const allDataCorrect = Object.keys(validData).every(key => userData[key] === validData[key]);
// object.key() = function yang mengambil semua key yang ada pada suatu objek


if (allDataCorrect) {
    console.log("Anda diperbolehkan masuk"); // Output jika semua data sesuai
} else {
    console.log("Data tidak valid, akses ditolak"); // Output jika ada yang tidak sesuai
}



console.log("=".repeat(100));