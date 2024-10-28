const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 500 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, param2) {
  /**
   * TODO:
   * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
   */
  // ini akan mencari di product yang pricenya sama

  return products.filter(bebas => bebas.price === param2) // untuk param2


  
}
console.log(getProductsByCategory(sampleProducts, 500)); 

//kode diatas hanya dapat digunakan untuk memfilter 1 kejadian atau 1 key atau 1 jenis data karna keterbatasan kode. namun kita bisa menambahkan logika untuk mencari filter lainnya dengan mengubah fungsi logika program.



/*
Explanation

sampleProducts adalah nama indentifier dari array yang berisikan objek. dimana setiap objek arrya ini memiliki key Id, name, category, dan price.

tugas filter adalah memfilter atau menyisihkan hal hal yang ingin untuk disisihkan contohnya pada code diatas kita ingin menyisihkan semua data dengan yang hanya punya harga " 500 " saja.

function namadisinibebasya (parameter1, parameter 2) {
  return parameter1.filter(inijugabebas => inijugabebas.price = parameter2 )

}

console.log(namasidisinibebasya(namaindentifierarrayobjek, 1000))

===================================================================

kita membuat function dengan nama yang kita tentukan dan menambahkan 2 parameter dengan nama yang bebas pula, kebanyakan dari kode biasanya memiliki parameter yang sama sehingga sulit melihat alur logika perjalanan program.

const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
  return products.filter(products => products.category == category)
}
console.log(getProductsByCategory(sampleProducts, 'Electronics'));



disini kamu akan kebingungan dalam membaca kodenya jika baru mulai belajar coding. karena selintas semuanya mirip.

kita akan mulai membaca dari console.log, dimana dia memanggil fungsi getproductbycategory dengan isi 2 parameter yaitu sampelproduct dan sebuah string 'electronics'. 

sampelproduct mengacu kepada array objek dan string electronis hanyanya sebuah string yang menjadi parameter ke dua dan nantinya akan dibandingakan

berarti ketika di function getProductsByCategory(products, category)
(products (berisikan list array objek dan isinya), category( berisikan string "Electronics"))

return products.filter(products => products.category == category)
ketika dikode ini products.filter(), productsnya adalah parameter1 tetapi yang didalam tanda kurung filter (bukanlah parameter1 melainkan bunny kode). maksudnya kamu dapat melakukan perubaha kata. seperti pada for loop (i < 0) padahal i biasa aja sebuah sting ataupun number.

maka kode dapat dimanipulasi menjadi

const Productnya = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function cariinkategorinya(products, kategoryyangdipilih) {
  return products.filter(item => item.category == kategoryyangdipilih)
}
console.log(cariinkategorinya(Productnya, 'Electronics'));


lihat? sekarang lebih mudah dipahami karna kamu tau kemana setiap kode diinisiasikan, sebelumnya semuanya kelihatan sama namun sebenarnya berbeda.

=================================================================

*/

const paraProduk = [
  { id: 'PO1', name: 'Laptop', category: 'Electronics', color: 'white', preorder: 'yes', price: 1200 },
  { id: 'PO2', name: 'Smartphone', category: 'Electronics', color: 'black', preorder: 'no', price: 800 },
  { id: 'PX2', name: 'Laptop Pro', category: 'Electronics', color: 'silver', preorder: 'yes', price: 2000 },
  { id: 'PO3', name: 'T-Shirt', category: 'Apparel', color: 'red', preorder: 'no', price: 25 },
  { id: 'PO4', name: 'Sneakers', category: 'Footwear', color: 'blue', preorder: 'yes', price: 100 },
  { id: 'PO5', name: 'Watch', category: 'Accessories', color: 'gold', preorder: 'no', price: 300 },
  { id: 'PZ6', name: 'Tablet', category: 'Electronics', color: 'grey', preorder: 'yes', price: 600 },
  { id: 'PX1', name: 'Gaming Chair', category: 'Furniture', color: 'black', preorder: 'yes', price: 250 },
  { id: 'POZ3', name: 'Wireless Headphones', category: 'Accessories', color: 'white', preorder: 'no', price: 150 },
  { id: 'PX3', name: 'Jeans', category: 'Apparel', color: 'blue', preorder: 'yes', price: 50 },
  { id: 'PZ7', name: 'Smartwatch', category: 'Electronics', color: 'black', preorder: 'no', price: 200 },
];

function cariProduk(produknya, prefiksId, categoryProduk, colorProduk, preorderProduk, minPrice, maxPrice) {
  return produknya.filter(item => {
    const isIdMatch = prefiksId.some(prefix => item.id.startsWith(prefix));
    const isCategoryMatch = categoryProduk ? item.category === categoryProduk : true;
    const isColorMatch = colorProduk ? item.color === colorProduk : true;
    const isPreorderMatch = preorderProduk !== undefined ? item.preorder === preorderProduk : true;
    const isPriceMatch = (minPrice !== undefined ? item.price >= minPrice : true) &&
                         (maxPrice !== undefined ? item.price <= maxPrice : true);

    console.log(`Checking item: ${item.name} | ID Match: ${isIdMatch} | Category Match: ${isCategoryMatch} | Color Match: ${isColorMatch} | Preorder Match: ${isPreorderMatch} | Price Match: ${isPriceMatch}`);

    return isIdMatch && isCategoryMatch && isColorMatch && isPreorderMatch && isPriceMatch;
  });
}


const prefiksId = ['PO', 'PX', 'PZ'];

console.log(cariProduk(paraProduk, prefiksId, 'Electronics', null, 'yes', 100, 1300));







