// Ambil elemen form dari dokumen dengan ID "search-form".
const form = document.querySelector('#search-form');

// Tambahkan event listener ke form untuk menangkap event "submit".
form.addEventListener('submit', async (e) => {
	// Mencegah perilaku default dari form, yaitu refresh halaman saat disubmit.
	e.preventDefault();

	// Hapus semua elemen gambar yang ada di halaman sebelum menampilkan hasil pencarian baru.
	document.querySelectorAll('img').forEach((img) => img.remove());

	// Ambil nilai dari input dengan nama "query" dalam form (kata kunci pencarian).
	const keyword = form.elements.query.value;

	// Buat objek konfigurasi untuk menyertakan parameter pencarian ke API.
	const config = {
		params: { q: keyword }, // Parameter "q" digunakan API untuk melakukan pencarian berdasarkan kata kunci.
	};

	// Lakukan permintaan GET ke API TVMaze dengan parameter pencarian.
	const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);

	// Panggil fungsi getImages untuk menampilkan gambar dari hasil pencarian.
	getImages(res.data);

	// Kosongkan nilai input setelah pencarian selesai.
	form.elements.query.value = '';
});

// Fungsi untuk mengambil dan menampilkan gambar dari hasil pencarian API.
const getImages = (shows) => {
	// Iterasi setiap hasil pencarian (array "shows" dari respons API).
	for (let result of shows) {
		// Periksa apakah hasil pencarian memiliki properti "image" (untuk memastikan ada gambar).
		if (result.show.image) {
			// Buat elemen gambar baru di dokumen.
			const img = document.createElement('img');

			// Atur sumber gambar (URL) ke properti "medium" dari respons API.
			img.src = result.show.image.medium;

			// Tambahkan elemen gambar ke dalam body dokumen.
			document.body.append(img);
		}
	}
};
