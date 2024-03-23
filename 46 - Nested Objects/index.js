// nested objects = object inside of other objects.
//                  allows you to represent more complex data structures
//                  child object is enclosed by a parent object

//                  Person{address{}, contactInfo{}}
//                  shopping{keyboard{}, mouse{}, moniter{}}

// const person = {
//     fullname : "max bob",
//     age : 30,
//     isstudent : true,
//     hobi : ["karate","cooking","jellyfishing"],
//     alamat : {
//         stret : "jalan raya",
//         city : "bottom",
//         country : "water inc"
//     }
// }

// console.log(person.fullname)
// console.log(person.age)
// console.log(person.isstudent)
// console.log(person.hobi[2])
// console.log(person.alamat)
// console.log(person.alamat.stret)

// for(const property in person.address){
//     console.log(person.address(property));
// }

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }

}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("max",30,"124 street","bootme","international water")
const person2 = new Person("bob",32,"333 street","bootme","international water")
const person3 = new Person("boby",32,"3111 street","bootme","international water")

console.log(person1.address)
console.log(person1.address.country)
console.log(person2,person2.address)