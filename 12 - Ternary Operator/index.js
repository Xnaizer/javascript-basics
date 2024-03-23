// ternary operator = a shortcut to if and else statements helps to assign a variable based on a condition
// code = conditions? code if true : code if false

let age = 21

let message = age >= 18 ? "dewasa" : "BocilXKematian"

console.log(message);

// bisa true false trus x : y

let purchaseamount = 100;
let diskon = purchaseamount >= 100? 10 : 0;
console.log(`your total is $${purchaseamount - purchaseamount * (diskon/100)}`)