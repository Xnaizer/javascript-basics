// string methods = allow you to manipulate and work with text (strings)

let userName = "  Xnaizerrre";

console.log(userName.charAt(0));
// mengambil huruf yang ditentukan urutannya bermulai dari 0

console.log(userName.indexOf("i"));
// mengambil urutan nomor dari huruf yang ditentukan

console.log(userName.lastIndexOf("e"));
//mengambil urutan dari huruf yang ditentukan semisal e ada dua yang paling terakhir e nya ada di urutan ke berapa


console.log(userName.length)
//menentukan panjang dari huruf

console.log(userName.trim())// meanghapus spasi
console.log(userName.toUpperCase()) // uppercase
console.log(userName.toLowerCase()) // lowercase
console.log(userName.repeat(3)) // repeat

let result = userName.startsWith(" ")
console.log(result)

let result1 = userName.startsWith("x")
console.log(result1)

let result2 = userName.endsWith("e")
console.log(result2)

let result3 = userName.includes("x")
console.log(result3)

let result4 = userName.includes("X")
console.log(result4)


let pnum = "121-213141-412";
pnum = pnum.replaceAll("-","");
console.log(pnum)

let pnum1 = "121-213141-412";
pnum1 = pnum1.padStart(18,"+62 ");
console.log(pnum1)

let pnum2= "121-213141-412";
pnum2 = pnum2.padEnd(18,"0");
console.log(pnum2)

let pnum3 = "121-213141-412";
pnum3 = pnum3.padStart(18,"+62 ").replaceAll("-","");
console.log(pnum3)