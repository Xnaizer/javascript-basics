// synchronous = executes line by line conseccutively in a sequential manner code that waits for an operation to complete.
// asynchronous = allows multiple operations to be performed concurrently without waiting doenst block the execution flow and allow the program to continiue
// (I/O operations, network requests, fetching data)
// handled with : callbacks, promises, async/await

// sinkron :

// console.log("task 1")
// console.log("task 2")
// console.log("task 3")

// console.log("Mulai");

// function prosesSatu() {
//   console.log("Proses Satu Selesai");
// }

// function prosesDua() {
//   console.log("Proses Dua Selesai");
// }

// prosesSatu();
// prosesDua();

// console.log("Selesai");

// mereka akan mengeksekusi code dari line teratas ke line terbawah


//async
// Asynchronous memungkinkan beberapa operasi untuk dilakukan secara bersamaan tanpa harus menunggu operasi sebelumnya selesai.
console.log("Mulai");

function prosesSatu(callback) {
  setTimeout(function() {
    console.log("Proses Satu Selesai");
    callback();
  }, 10000);
}

function prosesDua() {
  console.log("Proses Dua Selesai");
}

prosesSatu(function() {
  prosesDua();
});

console.log("Selesai");

