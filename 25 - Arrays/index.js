// array = a var like structure that can hold more than 1 value

let buah = ["apel","magga","pisang"];
console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);

console.log("================")

buah[1] = "naga";
console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);

buah.push("kacang");
console.log(buah[3]);
buah.pop()
console.log(buah[3]); // disini kacang dihapus karna pop hapus bagian paling belakang
buah.unshift("pillow"); // menambahkan pillow di array terdepan

console.log(buah);
buah.shift(); // menghapus array terdepan
console.log(buah);

let pjgbuah = buah.length;
console.log(pjgbuah);

for(let i = 0; i < buah.length; i++){
    console.log(buah[i]);
}

