const jokes = document.querySelector('#jokes'); // cape ah udah taukan ini apa panggil query
const button = document.querySelector('button');

const addJoke = async () => { // melakukan pemasukan data ke html
	const jokeText = await getJokes(); // tapi selesain dulu function ini kerja, ntar ada nilainya baru ini kita jalankan yang lain yaa
	const newLI = document.createElement('LI');  // buat di html doc elemetn list
	newLI.append(jokeText); // masukkin nilai joke ke lisnya ya
	jokes.append(newLI); // baru di query masukkin joke biar tampil dihtml sebagai bintang yang bersinar
};

const getJokes = async () => {  // LAKUKAN INI DULUAN YA BEB
	try { // kita coba dulu nich
		const config = {  // buat konfigurasi dulu yaa dengan axios
			headers: {
				Accept: 'application/json', // hanya menerima data json oke ?
			},
		};
		const res = await axios.get('https://icanhazdadjoke123123.com/', config); // tunggu proses pengambilan data yaa
		return res.data.joke; // lemparkan datanya keluarr
	} catch (error) {
		return 'No Jokes Available!';  // ah ga seru serius mulu elu kocak!
	}
};


button.addEventListener('click', addJoke); // yaa ini event listerner kali ada yang klik lakukan add joke motor 
