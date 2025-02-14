// TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = "IDR";

// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
let value = 10000;

// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.

// let value + 5000; // ini salah karena let digunakan sekali dan operator + tidak bisa berjalan tanpa adanya assignment operator.

// maka kita harus menambahkan assignment operator
value += 5000;

/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan penambahan string dari nilai `currency` + " " + `value`.
 */

const money = currency + " " + value;
console.log(money);