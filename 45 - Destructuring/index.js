//destructuring = extract values from arrays and objects,
//               then assign them to variables in a convienient way
//                [] = to perfrom array destructuring
//                {} = to perform object destructuring


// // example 1 swap the value of two variable
// let a = 1;
// let b = 2;

// [a,b] = [b,a]

// console.log(a)
// console.log(b)



// //example 2  swap2 element in an array

// const color = ["red","blue","yellow","white"];

// [color[0], color[3]] = [color[3], color[0]]

// console.log(color);



// // example 3 assign array elements to variables
// const colors = ["red","blue","yellow","white"];

// const [colorutama,colorkedua,colorketiga, ...extrea] = colors;

// console.log(colorutama);
// console.log(colorkedua);
// console.log(colorketiga);
// console.log(extrea);



// // example 4 extract values from object

// const person1 = {
//     nama1 : "max",
//     nama2 : "bob",
//     age : 30,
//     job : "a1x",
// }

// const person2 = {
//     nama1 : "matt",
//     nama2 : "G",
//     age : 20,

// }

// // const {nama1, nama2,age,job="ga kerja"} = person1;

// // console.log(nama1);
// // console.log(nama2);
// // console.log(age);
// // console.log(job);

// const {nama1, nama2,age,job="ga kerja"} = person2;

// console.log(nama1);
// console.log(nama2);
// console.log(age);
// console.log(job);



// example 5 destructure in function parameters

function display1({nama1,nama2,age,job="gakerja"}){
    console.log(`name : ${nama1 + " " + nama2}`)
    console.log(`umur : ${age}`)
    console.log(`kerjaan : ${job}`)
}
const person1 = {
    nama1 : "max",
    nama2 : "bob",
    age : 30,
    job : "a1x",
}

const person2 = {
    nama1 : "matt",
    nama2 : "G",
    age : 20,
}

display1(person1);
display1(person2);