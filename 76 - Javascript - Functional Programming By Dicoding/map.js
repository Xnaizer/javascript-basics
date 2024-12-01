// Metode .map() di JavaScript digunakan untuk membuat array baru dengan hasil dari menerapkan suatu fungsi pada setiap elemen array.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

console.log("=".repeat(100))

const numbers2 = [1, 2, 3];
const stringNumbers = numbers2.map(num => num.toString());
console.log(stringNumbers); // Output: ["1", "2", "3"]

console.log("=".repeat(100))

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const userNames = users.map(user => user.name);
console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]

console.log("=".repeat(100))

const numbers3 = [1, 2, 3, 4, 5];
const evenOrOdd = numbers3.map(num => (num % 2 === 0 ? "Even" : "Odd"));
console.log(evenOrOdd); // Output: ["Odd", "Even", "Odd", "Even", "Odd"]

console.log("=".repeat(100))

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 }
];
const discountedProducts = products.map(product => ({
name: product.name,
price: product.price * 0.9 // Diskon 10%
}));
console.log(discountedProducts);
  // Output: [{ name: "Laptop", price: 900 }, { name: "Phone", price: 450 }, { name: "Tablet", price: 630 }]
  

console.log("=".repeat(100))

const words = ["apple", "banana", "cherry"];
const formattedWords = words.map(word => {
  const upperCased = word.toUpperCase();
  const letterCount = word.length;
  return `${upperCased} (${letterCount} letters)`;
});
console.log(formattedWords);
// Output: ["APPLE (5 letters)", "BANANA (6 letters)", "CHERRY (6 letters)"]

console.log("=".repeat(100))

const numbers4 = [1, 4, 9, 16];

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

const roots = numbers4.map(calculateSquareRoot);
console.log(roots); // Output: [1, 2, 3, 4]

console.log("=".repeat(100))

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
const doubledMatrix = matrix.map(row => row.map(num => num * 2));
console.log(doubledMatrix);
  // Output: [[2, 4, 6], [8, 10, 12], [14, 16, 18]]
  
console.log("=".repeat(100))

const transactions = [
    { type: "income", amount: 1000 },
    { type: "expense", amount: 300 },
    { type: "expense", amount: 200 },
    { type: "income", amount: 1500 }
];

const netAmount = transactions
.map(transaction => transaction.type === "income" ? transaction.amount : -transaction.amount)
.reduce((acc, amount) => acc + amount, 0);

console.log(netAmount); // Output: 2000 (total saldo akhir setelah income dan expense)
  


