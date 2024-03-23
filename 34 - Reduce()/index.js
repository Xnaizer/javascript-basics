// .reduce() = reduce the elements of an array to a single value

const prices = [5,14,25,34,12,11];

const total = prices.reduce(sum);

console.log(total)

function sum(accumulator, element){
    return accumulator + element;
}

const grades = [5,14,25,34,12,11];

const maximum = grades.reduce(getMin);
console.log(maximum);

function getMin(accumulator, element){
    return Math.min(accumulator, element)
}






