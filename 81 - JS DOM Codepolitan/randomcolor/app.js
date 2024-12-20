const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
	const newColor = generateRandomColor();
	document.body.style.backgroundColor = newColor; // ubah warna body menjadi sesuai yang diminta generate rancom color
	h1.innerText = newColor; // ubah tag h1 menjadi isi dari fungsi generate randomcolor
});

const generateRandomColor = () => {  // membuat fungsi generate random color
	
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`; // mengembalikan nilai r g b sehingga dapat digunakan random colornya
};
