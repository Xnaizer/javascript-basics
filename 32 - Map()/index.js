// .map() = accepts a callback and applies that function to each element of an array, then return a new array

const number = [1,2,3,4,5,6];

const squares = number.map(square);
const cubes = number.map(cube);
console.log(squares)
console.log(cubes)

function square(element){
    return Math.pow(element,2)
}

function cube(element){
    return Math.pow(element,3)
}

const dates = ["2024-1-10","2025-2-12","2026-2-21"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates)

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}