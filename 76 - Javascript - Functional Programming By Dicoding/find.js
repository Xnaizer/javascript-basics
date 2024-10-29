console.log("=".repeat(100));
const sampleProducts = [
{ id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
{ id: 2, name: 'Phone', category: 'Electronics', price: 500 },
{ id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
{ id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
{ id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function findProductById(products, id) {
/**
 * TODO:
 * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
 */
    return products.find(item => item.id === id);
}   

console.log(findProductById(sampleProducts, 3)); // jika id tidak ada akan mengembalikan nilai unidentified

// .find() disini akan mencari item yang sesuai dengan kriteria yang diinginkan


console.log("=".repeat(100));

// penggunaan dalam mencari nama
function findNamaProduk(products, namaDicari) {

    return products.find(item => item.name === namaDicari);
}
console.log(findNamaProduk(sampleProducts, 'Watch'));

console.log("=".repeat(100));


// mencari angka ganjil pertama 

const angkaAngka = [2,4,6,7,8,9,10];

// fungsi mencari angka ganjil yang pertama

const ganjilPertama = angkaAngka.find(item => item % 2 !== 0);
console.log(ganjilPertama)



console.log("=".repeat(100))

const events = [
    { title: 'Meeting', date: '2024-10-29' },
    { title: 'Conference', date: '2024-11-05' },
    { title: 'Workshop', date: '2024-12-10' },
];

function findEventByDate(events, date) {
    return events.find(event => event.date === date);
}

const foundEvent = findEventByDate(events, '2024-11-05');
console.log(foundEvent);


console.log("=".repeat(100));


// mencari harga barang termurah di category tertentu

const products5 = [
    { name: 'Laptop', category: 'Electronics', price: 1000 },
    { name: 'Phone', category: 'Electronics', price: 500 },
    { name: 'Shirt', category: 'Apparel', price: 50 },
    { name: 'Shoes', category: 'Apparel', price: 80 },
];
  
function cariBarang(produknya2, minPrice, kategori){
    return produknya2.find(item => {
        const TentuinPrice = item.price <= minPrice;
        const TentuinKategori = item.category === kategori

        return TentuinKategori && TentuinPrice
    });
}

const barangDitemukan = cariBarang(products5, 900, 'Electronics');

console.log(barangDitemukan)