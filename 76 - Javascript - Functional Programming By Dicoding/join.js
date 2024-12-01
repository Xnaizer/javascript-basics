// 16. .join()
// Menggabungkan semua elemen dalam array menjadi string, dengan separator yang kamu tentukan.

// Contoh:

// javascript
// Copy code
// const words = ['Hello', 'world'];
// const sentence = words.join(' ');
// console.log(sentence); // "Hello world"


console.log("=".repeat(100));

const fruits = ["apel", "pisang", "ceri"];
const result = fruits.join(" - ");
console.log(result); // Output: "apel - pisang - ceri"

const numbers = [1, 2, 3];
const result1 = numbers.join();
console.log(result1); // Output: "1,2,3"


console.log("=".repeat(100));

// Membuat List dengan Pemisah
const technologies = ["HTML", "CSS", "JavaScript"];
const result2 = technologies.join(", ");
console.log(result2); // Output: "HTML, CSS, JavaScript"




console.log("=".repeat(100));

// array to path

const folders = ["home", "user", "documents", "project"];
const path = folders.join("/");
console.log(path); // Output: "home/user/documents/project"


console.log("=".repeat(100));

// query string dari parameter

const params = {
    search: "laptop",
    sort: "price",
    order: "asc"
};
  
const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  
console.log(queryString); // Output: "search=laptop&sort=price&order=asc"
  
// pelajari lagi

console.log("=".repeat(100));

// Konversi Array of Objects Menjadi Format CSV

const data = [
    { name: "Alice", age: 25, job: "Engineer" },
    { name: "Bob", age: 30, job: "Designer" },
];
  
const csv = [
  ["Name", "Age", "Job"],
  ...data.map(item => [item.name, item.age, item.job])
]
.map(row => row.join(","))
.join("\n");

console.log(csv);
// Output:
// Name,Age,Job
// Alice,25,Engineer
// Bob,30,Designer



console.log("=".repeat(100));

// code snippet

const htmlParts = [
    "<div>",
    "<h1>Selamat Datang</h1>",
    "<p>Ini adalah situs kami.</p>",
    "</div>"
];
  
const htmlString = htmlParts.join("\n");
console.log(htmlString);
  // Output:
  // <div>
  // <h1>Selamat Datang</h1>
  // <p>Ini adalah situs kami.</p>
  // </div>
  

console.log("=".repeat(100));

// data og to format logging

const userInfo = {
    username: "johndoe",
    action: "login",
    timestamp: new Date().toISOString()
  };
  
  const logMessage = Object.values(userInfo).join(" | ");
  console.log(logMessage); // Output: "johndoe | login | 2024-11-08T10:30:15.123Z"
  