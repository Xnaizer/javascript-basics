// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions 
// ex static keyworc, encapsulation, inheritance

function produk(name, harga){
    this.name = name;
    this.harga = harga;

    this.displayproduk = function(){
        console.log(`Product : ${this.name}`);
        console.log(`Harga : $${this.harga.toFixed(2)}`);
    };
    this.totalnya = function(salesTax){
        return this.harga + (this.harga * salesTax);
    }
}

const salesTax = 0.05;
const prod1 = new produk("shirt",19.99);
prod1.displayproduk();
const totalharga = prod1.totalnya(salesTax);

console.log(`total harga + pajak $${totalharga.toFixed(2)}`)

// menjadi

const salesTax1 = 0.05;

class produkbaru{
    constructor(name,harga){
        this.name = name;
        this.harga = harga;
    }
    displayproduk1(){
        console.log(`Product : ${this.name}`);
        console.log(`Harga : $${this.harga.toFixed(2)}`);
    };
    totalnya1(salesTax1){
        return this.harga + (this.harga * salesTax1);
    }


}

const prod2 = new produkbaru("shirt",19.99);
prod2.displayproduk1();
const totalharga2 = prod2.totalnya1(salesTax1);
console.log(`total harga + pajak $${totalharga2.toFixed(2)}`)