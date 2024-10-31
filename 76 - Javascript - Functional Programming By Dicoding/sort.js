/*
.sort() adalah funvtion yang digunakan untuk mengurutkan data seperti array.







*/

console.log("=".repeat(100));


const sampleProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
    { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
    { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function hargaTerendahKeTinggi(produk){
    return produk.sort((a,b) => a.price - b.price);
}

console.log(hargaTerendahKeTinggi(sampleProducts));



console.log("=".repeat(100));

function hargaTertinggiKeTerendah(produk){
    return produk.sort((a,b) => b.price - a.price);
}

console.log(hargaTertinggiKeTerendah(sampleProducts));

console.log("=".repeat(100));

// sort berdasarkan urutan produk secara alfabetis

function sortingProdukAlphabet (produk) {
    return produk.sort((a,b) => a.name.localeCompare(b.name));

}

console.log(sortingProdukAlphabet(sampleProducts));

console.log("=".repeat(100));

function kategoriBerdasarkanHarga (product) {
    return product.sort((a,b) => {
        if (a.category === b.category){
            a.price - b.price;
        }

        return a.category.localeCompare(b.category)

    })
}

console.log(kategoriBerdasarkanHarga(sampleProducts))

console.log("=".repeat(100));

const dates = [
    "2023-05-01",
    "2022-12-12",
    "2024-01-01",
    "2022-05-01"
];

dates.sort((a, b) => new Date(b) - new Date(a)); // Dari terbaru ke terlama
console.log(dates); // Output: ["2024-01-01", "2023-05-01", "2022-12-12", "2022-05-01"]

// disini kita tau jika array bertipe string, tugas Date(a/b) mengubah string tanggal menjadi tanggal.

// parseFloat()  mengonversi string menjadi angka desimal agar bisa dibandingkan.

// parseInt() mengonversinya menjadi angka untuk diurutkan.

// .length mengukur huruf yang ada di dalam array

console.log("=".repeat(100));

// nested validation sort

const people = [
    { name: "Alice", age: 30, rating: 5 },
    { name: "Bob", age: 25, rating: 5 },
    { name: "Charlie", age: 35, rating: 4 },
    { name: "Diana", age: 22, rating: 5 }
];

people.sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating; // Rating tertinggi terlebih dahulu (angka terbesar banding angka terkecil )
    if (a.name !== b.name) return a.name.localeCompare(b.name); // membandingkan abjad
    return a.age - b.age; // Usia dari yang termuda ke yang tertua
});
console.log(people);
