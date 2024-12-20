const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');
// code diatas digunakan untuk mengambil masing2 selektor dengan id dan class


form.addEventListener('submit', function (e) { // ini adalah event listener untuk form ketika disubmit
	e.preventDefault(); // mencegah perpindahan halaman
	const noteValue = input.value; // mengambil value dari input yang diketikan
	const newList = document.createElement('li'); // membuat element new list 
	newList.innerText = noteValue; // mengisi value ke newList
	list.append(newList); // memasukkan list2 yang dibuat ke div list di html
	input.value = ''; // ketika sudah disubmit maka kosongkan input ya
});
