const buah = [{nama : "apel", color : "merah", calori : 12},
                {nama : "mangga", color : "kuning", calori :23 },
                {nama : "alpukat", color : "hijau", calori : 10 },
                {nama : "jeruk", color : "oren", calori : 7 }];



console.log(buah[1].nama);                
console.log(buah[2].color);

// add array

buah.push({nama : "naga", color : "putih", calori : 7 })

console.log(buah)

// buah.pop(); //untuk mengahapus bagian paling belakang

buah.splice(0,2) //ini menghilangkan array dari 0 ssebanyak 2 aray
console.log(buah)

// foreach()

buah.forEach(buah => console.log(buah.color))
buah.forEach(buah => console.log(buah))

const buah2 = buah.map(buah => buah.nama)
console.log(buah2)

// filter()

const caloren = buah.filter(buah => buah.calori < 18);
console.log(caloren)

// reduce()

const maxcal = buah.reduce((maxim, elementbuah) => elementbuah.calori > maxim.calori ? ele : maxim);

console.log(maxcal)
console.log(maxcal.calori)