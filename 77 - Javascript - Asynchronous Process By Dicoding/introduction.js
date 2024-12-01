/*

asinkron berarti tidak dalam waktu atau kecepatan yang sama atau tidak serentak

Asynchronous Process, atau proses asinkron, adalah suatu metode dalam pemrograman yang memungkinkan suatu tugas berjalan di "latar belakang" tanpa harus menunggu tugas tersebut selesai sebelum melanjutkan ke tugas berikutnya. Ini sangat berguna dalam situasi di mana suatu proses memerlukan waktu lama, seperti mengambil data dari server, menunggu respons dari API, atau membaca file besar.

Cara Kerja Asynchronous Process
Dalam pemrograman sinkron (synchronous), setiap tugas berjalan satu per satu secara berurutan. Jika satu tugas memerlukan waktu lama, program harus menunggu hingga tugas itu selesai sebelum lanjut ke tugas berikutnya. Ini bisa memperlambat aplikasi, terutama jika ada banyak tugas berat.

Namun, dalam proses asinkron:

Tugas yang lambat dapat dipisahkan untuk berjalan di latar belakang.
Program bisa langsung melanjutkan tugas-tugas lain tanpa menunggu proses tersebut selesai.
Ketika tugas yang berjalan di latar belakang selesai, hasilnya akan dikembalikan atau dieksekusi (misalnya melalui callback, promise, atau async/await di JavaScript).


Contoh Sederhana dalam JavaScript
Misalkan ada contoh untuk mengambil data dari server:




*/


console.log("Memulai pengambilan data...");

setTimeout(() => {
  console.log("Data diterima!");
}, 3000);

console.log("Lanjut ke tugas berikutnya.");


// Memulai pengambilan data...
// Lanjut ke tugas berikutnya.
// Data diterima! (Setelah 3 detik)

/*
Mengapa Asynchronous Process Penting?
Proses asinkron sangat penting dalam aplikasi modern, terutama untuk:

Responsivitas UI: Agar antarmuka pengguna tetap responsif dan tidak "terhenti" saat menjalankan tugas-tugas besar.
Efisiensi I/O: Memproses data sambil menunggu data lain yang mungkin berasal dari jaringan atau server yang lambat.
Skalabilitas: Membuat aplikasi dapat menangani beberapa tugas secara bersamaan tanpa memblokir tugas-tugas penting lainnya.
Contoh dalam kehidupan nyata: Bayangkan kamu sedang menunggu makanan di restoran (I/O task). Daripada hanya berdiri di depan koki hingga pesanan selesai, kamu bisa duduk sambil melakukan hal lain. Ketika makanan sudah siap, pelayan akan memberitahumu.





*/



// setTimeout adalah salah satu dari sekian global function yang dapat menetapkan timer (pengatur waktu) bagi function agar dieksekusi. Jadi, ada dua parameter wajib, yaitu nilai berupa function dan number sebagai timer. Setelah timer sudah berakhir, seluruh cuplikan kode dalam function akan dieksekusi

const estimationTime1 = 10_000;

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime1);

/* Output:
Hello, world!
*/

// script.js
const { makeCoffee } = require('./coffee.js');

const estimationTime = 10_000;

setTimeout(() => {
  console.log('Hello, world!');
}, estimationTime);

console.log('Saya memesan kopi di kafe.');
makeCoffee();
console.log('Pramusaji memberikan kopi pesanan.');
console.log('Saya mendapatkan kopi dan menghabiskannya.');

// tanpa callback akan tidak berurut



/*
Ekspektasi yang kita miliki adalah output dengan urutan berikut.

Saya memesan kopi di kafe.
Mohon menunggu. Pramusaji sedang membuatkan kopi dalam 5 detik.
Pramusaji selesai membuat kopi.
Pramusaji memberikan kopi pesanan.
Saya menghabiskan kopi dan menghabiskannya.

*/