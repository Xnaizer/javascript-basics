// coffee.js
function makeCoffee(callback) {
  const estimationTime = 5000; // waktu dalam milidetik
  const inSecond = Math.ceil(estimationTime / 1000);
  
  console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    console.log('Pramusaji selesai membuat kopi.');

    callback(); // tambahkan function callback untuk menyelesaikan proses ini baru lanjut
    
  }, estimationTime);
}

module.exports = { makeCoffee };
