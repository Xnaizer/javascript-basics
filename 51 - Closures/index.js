// closure = a function inside another function, the inner function has access to the variable and scope of the outer function.
// allow private variable and state maintenance used frequently in js frameworks : react vue angular

function outer(){
    let msg = " hello";

    function inner(){
        console.log(msg); // dapat mengambil variable outer
    }

    inner(); // dipanggil didalam functiob outer  

}

outer();

// versi lain 

// let count = 0;

// function tambah(){
//     count++;
//     console.log(`count increse to ${count}`);
// }

// tambah();
// tambah(); // keanya gini angka akan bertambah menjadi +1 setiap fungsi dipanggi tapi kelemahannya variable count = 0 ada di global dan ini sangat bahaya untuk digunakan, karna bisa diubah oleh orang.

// maka gunakan closure

function counterrr(){
    let count = 0;

    function tambah(){
        count++;
        console.log(`count increse to ${count}`);
    }   
    function getcount(){
        return count;
    } 
    return {tambah,getcount};
}

const hitng = counterrr();

hitng.tambah();
hitng.tambah();
hitng.tambah();
hitng.tambah();
hitng.tambah();

console.log(hitng.count) // disini kita gatau berapa nilai count karna tersembunyi\

console.log(hitng.getcount())