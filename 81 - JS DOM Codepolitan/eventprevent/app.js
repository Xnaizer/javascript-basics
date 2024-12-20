const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');
// code diatas digunakan untuk mengambil masing2 selektor dengan id dan class


input.addEventListener('change', (e) => {
	console.log('ada perubahan') // change akan melihat setiap perubahan input yang diberikan walau tidak disubmit
});


input.addEventListener('input', (e) => {
	console.log('ada yang dinput per key') // input akan melihat setiap perubahan input per key yang diberikan walau tidak disubmit
});

form.addEventListener('submit', function (e) { // ini adalah event listener untuk form ketika disubmit
	e.preventDefault(); // mencegah perpindahan halaman
	const noteValue = input.value; // mengambil value dari input yang diketikan
	const newList = document.createElement('li'); // membuat element new list 
	newList.innerText = noteValue; // mengisi value ke newList
	list.append(newList); // memasukkan list2 yang dibuat ke div list di html
	input.value = ''; // ketika sudah disubmit maka kosongkan input ya
});


list.addEventListener('click', (e) => {
	// e.target.remove(); // menghapus list yang di klik dengan bantuan target

	e.target.nodeName === 'LI' && e.target.remove(); // mengambil target elemen nodename dengan nama elemen LI jika benar dan kondisi remove juga benar maka lakukan remove
})