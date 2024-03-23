// variable scope = where a var is regconized anda accessible (local vs global)

// disini hanya menjelaskan kalo didalam fungsi internal tidak dapat mengeksekusi variabel selain di dalam fungsi kecuali variable global atau diluar dari fungsi maka bisa dieksekusi 

//contoh

function f1(){
    let x1 = 2;
    console.log(x1)
}

function f2(){
    let x = x1;
    console.log(x)

}

f1();
// f2(); // ini akan eror karna ga bisa memanggil variable internal yang dimiliki oleh si f1 karna local def

x2 = 4;

function f3(){
    console.log(x2); // ini akan mengambil fungsi variable global karna di local ga ada.
}

f3();