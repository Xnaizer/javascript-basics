// arrow functions = a concise way to write function exppressions good for simple function that you only use once 
// (parameters) => somecode

// function biasa
function hello(){
    console.log("hello");
}
hello();


// function expresion
const hello1 = function(){
    console.log("hello1")
}
hello1();

// arrow functions
const hello2 = () => console.log("hello2")
hello2();

// pengisian
const hello3 = (name) => console.log(`hello3 ${name}`);
hello3("marzia");

// lebih dari satu line code ?
const hello4 = (name, age) => {console.log(`hello3 ${name}`)
                        console.log("goodmorning",age)};
hello4("marzia",12);

// contoh lain

setTimeout(hello5, 3000);
function hello5(){
    console.log("waerrr")
}

// or function expression
setTimeout(function(){
    console.log("waerrr")
}, 3000);

// arrow func

setTimeout( () => console.log("hello"), 3000);

const num = [1,2,3,4,5,6];

const squares = num.map((element) => Math.pow(element,2));
console.log(squares)

const evenNums = num.filter((terserah) => terserah % 2 === 0);
console.log(evenNums)