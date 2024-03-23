// forEach() = method used to iterate over elements of an array and apply a specified function ( callback ) to each element

//      array.forEach(callback)

let num  = [1,2,3,4,5,6];

// ini for each
num.forEach(cube)
num.forEach(display)
// ini akan ngeprint semua elemen di dalam array kita

function double(element, index, array){
    array[index] = element *2;

}

function cube(element, index, array){
    array[index] = Math.pow (element , 2);
} // kubik atau pangkat 3


function display(element){
    console.log(element);
}

// jadi disini num akan memulai fungsi pertama yaitu mendoublekan bilangan, lalu masuk ke fungsi display yang akan menampilkan kodenya

let buah = ["apple", "orange", "banana","coconut"];

buah.forEach(capitalize);
buah.forEach(display);

function uppercase(element, index, array){
    array[index] = element.toUpperCase();

}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}