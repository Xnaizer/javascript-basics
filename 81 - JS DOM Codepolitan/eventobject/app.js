document.querySelector('button').addEventListener('click', (e) => {
	console.log(e); // mengambil query tombol lalu menambahkan event saat key di clik maka print e
});

const input = document.querySelector('input'); //mengambil selektor input
input.addEventListener('keydown', (e) => { // dimana ketika input dilakukan dengan mengklik ke bawah key maka lakukan 
	switch (e.code) { // e.code adalah e sebagai key dan .code menentukan key kanan atau kiri. ctrlright or ctrlleft
		case 'ArrowUp': // saat arraw up di tenkan maka print ini
			console.log('Tombol Arah Atas');
			break;
		case 'ArrowDown':
			console.log('Tombol Arah Bawah');
			break;
		case 'ArrowLeft':
			console.log('Tombol Arah Kiri');
			break;
		case 'ArrowRight':
			console.log('Tombol Arah Kanan');
			break;
		default:
			console.log('diabaikan');
	}
});

// input.addEventListener('keyup', () => {
// 	console.log('Tombol dirilis');
// });
