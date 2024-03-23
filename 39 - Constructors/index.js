// constructor = special method for defining the properties and methods of objects

// pake ini klo kebanyakan object

const car1 = {
    make : "mclaren",
    year : 2024,
    color : "red",
    drive : function(){console.log(`you drive ${this.make}`)}
}

const car2 = {
    make: "ford",
    year : 2023,
    color : "blue",
    drive : function(){console.log(`you drive ${this.make}`)}
}

const car3 = {
    make : "doge",
    year : 2021,
    color : "green",
    drive : function(){console.log(`you drive ${this.make}`)}
}

// cara singkat bikinnya 

function Car(make,year,color){
    this.make = make,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`you drive ${this.make}`)}
}


const car4 = new Car("tesla1",2021,"blue")
const car5 = new Car("tesla2",2022,"red")
console.log(car4.make)
console.log(car4.year)
console.log(car4.color)
car4.drive();

console.log(car5.make)
console.log(car5.year)
console.log(car5.color)