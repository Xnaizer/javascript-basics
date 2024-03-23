// = assignment operator
// == comparison operator ( compare id value are equal)
// === strict equality operator( compare if value dan datatype are equal)
// != inequality operator
// !== strict inequality operator

// = operator penugasan
// == operator perbandingan (bandingkan nilai id sama)
// === operator kesetaraan yang ketat (bandingkan jika nilai dan tipe data sama)
// != operator pertidaksamaan
// !== operator pertidaksamaan ketat

const PI = 3.14;

if(PI === "3.14"){  // klo pake === maka jawabannya bakalan salah karena const pi adalah float dan pi di if karna menggunakan "3.14" maka menjadi string olehkarena itu === akan false, tapi jika menggunakan == akan true karna operator perbadingan hanya melihat apakah value yg dikeluarkan itu sama 
    console.log("Thats Pi");

}
else{
    console.log("Thats not pi");
}

// jadi === sama dengan !=
// == sama dengan !==