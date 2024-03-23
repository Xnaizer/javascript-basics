// sort() = method used to sort element of an array in place.
//          sorts elements as string in lexicographic order, not alphabetical
    // lexicographical = (alphabet + numbers + symbols) as string



// sort () = metode yang digunakan untuk mengurutkan elemen array di tempat.
// mengurutkan elemen sebagai string dalam urutan leksikografi, bukan abjad
     // leksikografi = (alfabet + angka + simbol) sebagai string


let buah = ["apel","orange","banana","pineapple"]

buah.sort();

console.log(buah)

let angka = [9,7,5,6,8,10,1,4,2,3]; // disini 10 berada di setelah 1 TIDAK KE SORT
angka.sort();
console.log(angka)

let angka1 = [9,7,5,6,8,10,1,4,2,3];
angka1.sort((a,b) => a - b); // reversenya b - a
console.log(angka1)

const people = [{nama : "max", age : 20 , gpa : 3.5},
                {nama : "bob", age : 51 , gpa : 1.0},
                {nama : "alex", age :  21, gpa : 2.5},
                {nama : "negan", age : 12 , gpa :3.0 }];

// people.sort(); // tak akan berubah
// people.sort((a,b) => a.age - b.age);
// people.sort((a,b) => a.gpa - b.gpa);
// people.sort((a,b) => a.nama - b.nama); // ini tak bisa 

people.sort((a,b) => a.nama.localeCompare(b.nama));


console.log(people)