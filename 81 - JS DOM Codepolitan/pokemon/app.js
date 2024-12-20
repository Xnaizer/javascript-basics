// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container'); // mengambil selector container

const baseImgURL =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; // menggunakan API base untuk pokemon yang tersedia

for (let i = 1; i <= 1000; i++) {   //melakukan looping untuk berapa banyak objek yang akan ditampilkan pada container
	const pokeBall = document.createElement('div');
	// membuat element html yaitu div
	
	pokeBall.classList.add('pokemon'); // ta,bahkan class css
	

	const imgPokemon = document.createElement('img');// ta,bahkan class img
	imgPokemon.src = `${baseImgURL}${i}.png`;
	// link untuk gambar img

	const label = document.createElement('span');
	label.innerText = `#${i}`;

	pokeBall.appendChild(imgPokemon); // tambahaknan class anak dari pokeball ( div )
	pokeBall.appendChild(label);
	container.appendChild(pokeBall);
}
