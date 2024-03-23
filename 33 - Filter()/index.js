// ,filter() = creates a new array by filtering out elements

let numbers = [1,2,3,4,5,6,7];
let evenNums = numbers.filter(isEven);

console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}

const ages = [16,17,18,18,19,20,42]
const adults = ages.filter(isgede);

console.log(adults)


function isgede(element){
    return element >= 18;
}