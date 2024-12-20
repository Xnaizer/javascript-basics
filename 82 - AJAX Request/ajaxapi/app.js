
// menggunakan XMLHttpRequest

const req = new XMLHttpRequest(); // inisiasi pembuatan request
let data; // inisiasi data

req.onload = function () {  // ketika request di load atau diterima maka lakukan fungsi ini..
	data = JSON.parse(this.responseText); // bungkus pake data dengan membuat response yang didapat dibah menjadi json
	console.log(data);
};

req.onerror = function () {  // jika requestnya eror maka lakukan fungsi ini untuk memberikan info kalo eror atau mau melakukan apa ketika eror
	console.log('Error', this);
};

req.open('GET', 'https://swapi.dev/api/people/1', true); // melakukan permintaan dengan inisiasi .open dengan method get dimana kita akan mengambil data dari link ini lalu true sebagai penunjjukan untuk mengambil data yang ada
req.setRequestHeader('Accept', 'application/json'); //menambahkan header http untuk permintaan dengan nama accept yang nantinya data akan diproses menjadi tipe json
req.send(); // kirimkan datanya 



// menggunakan fetch 



fetch('https://swapi.dev/api/people/1') // ambil data dari web ini
	.then((res) => { // gunakan chainning callback dengan fungsi response
		if (!res.ok) { // kalo ga berhasil lakukan ini
			throw Error('Could not fetch the data for that resource');
		}
		return res.json(); // kalo berhasil lakukan pengubahan respon ke tipe json, disini data belum bisa kebaca karna belum keubah maka lakukan 1x lagi fungsi membacanya
	})
	.then((data) => {
		console.log('json 1', data); // fungsi membaca yang pertama
		return fetch('https://swapi.dev/api/people/2'); // melakikan pemaggilan lagi di sini dengan id yang berbeda 
	})
	.then((res) => {
		console.log('request 2');
		if (!res.ok) {
			throw Error('Could not fetch the data for that resource');
		}
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log('error', err);
	});



 // with async

const loadPeople = async () => { // inisiasi asing ya kita
	try { // cobalah melakukan ini sebelum...
		const res = await fetch('https://swapi.dev/api/peoplasjkdge/1'); // tungguin pengambilan data ini kelar lalu lanjutkan dengan ...
		const data = await res.json(); // ubah ini ke jsonnya sembari tunggu ya yang lain
		console.log(data); // coba print ah
		const res2 = await fetch('https://swapi.dev/api/people/2'); // lakukan lagi yang sama yah
		const data2 = await res2.json();
		console.log(data2);
	} catch (err) { // kalo udah dicoba yang atas dan tetap error maka lakukan fungsi ini yaa
		console.log('error', err);
	}
};

loadPeople(); // panggill function


// menggunakan axios

axios
	.get('https://swapi.dev/api/people123/1') // ambil data dari ..
	.then((res) => {
		console.log(res.data); // dapat deh datanya ga perlu chaining banyak2
	})
	.catch((err) => { // kalo error ini lakuin yaaa
		console.log(err);
		alert(err.message);
	});

axios
	.get('https://swapi.dev/api/people123/1')
	.then((res) => {
		console.log(res.data);
	})
	.catch((err) => {
		console.log(err);
		alert(err.message);
	});




const getPeople = async (id) => {
	try {
		const res = await axios.get(`https://swapi.dev/api/people/${id}`);
		console.log(res.data);
	} catch (error) {
		console.log(error);
		console.log(error.message);
		console.log(error.response.status);
		console.log(error.response.data);
	}
}; // udah lelah memberikan kepastian, udah pahamkan maksudnya ?
