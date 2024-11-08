// 18. .pop()
// Menghapus elemen terakhir dari array dan mengembalikannya. Ini juga memodifikasi array asli.

// Contoh:

// javascript
// Copy code
// const numbers = [1, 2, 3];
// const last = numbers.pop();
// console.log(last); // 3
// console.log(numbers); // [1, 2]


// penggunaan standar
let fruits = ['apel', 'pisang', 'jeruk'];
let removedFruit = fruits.pop();

console.log(fruits); // Output: ['apel', 'pisang']
console.log(removedFruit); // Output: 'jeruk'


console.log("=".repeat(100))

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let lastRow = matrix.pop();

console.log(matrix);  // Output: [[1, 2, 3], [4, 5, 6]]
console.log(lastRow); // Output: [7, 8, 9] mengambil pop


console.log("=".repeat(100))

// menghapus secara conditional

let numbers = [10, 20, 30, 40, 50];

if (numbers[numbers.length - 1] > 40) {
    let removedNumber = numbers.pop();
    console.log(`Menghapus ${removedNumber} karena lebih dari 40`);
} else {
    console.log("Tidak ada angka lebih dari 40 untuk dihapus");
}

console.log(numbers);  // Output: [10, 20, 30, 40]


console.log("=".repeat(100))

//pelajari lagi soal ini

// function sumArray(arr) {
    // if (arr.length === 0) return 0; // Basis rekursi: jika array kosong
    // return arr.pop() + sumArray(arr); // Menambahkan elemen terakhir lalu memanggil fungsi lagi
// }
// 
// let values = [1, 2, 3, 4, 5];
// let sum = sumArray(values);
// 
// console.log(sum);          // Output: 15
// console.log(values);       // Output: [] karena semua elemen sudah di-pop
// 