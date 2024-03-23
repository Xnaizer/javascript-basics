// function declarations = define a reusable block of code that performs a spasific task

// example 

// function hello(){
//     console.log("hello");
// }
// hello()



// function expressions = a way to define functions as values or variables

// const hello = function(){
//     console.log("hello1");
// }
// hello();

// setTimeout(hello, 3000) // ini 3000ms = 3s, ini akan memanggil func hello setelah 3 detik akan ditampilkan

setTimeout(function(){
    console.log("hello11")
},3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element){
    return Math.pow(element,2)
})

console.log(squares);

// cara merubahnya
// const cubes = number.map(cube);

// console.log(cubes)

// function square(element){
//     return Math.pow(element,2)
// }

// menjadi

//const cubes = number.map(function(element){
    // return Math.pow(element,2)
// });