// // getter = special method that makes a property readable
// // setter = special method that makes a property writeable

// // validate and modidy a value when reading/writing a property

// class rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("must positive number")
//         }
//     }


//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("must positive number")
//         }
//     }

//     get width(){
//         return `${this._width} cm`;
//     }

//     get height(){
//         return this._height;
//     }

//     get area(){
//         return (this._width * this._height).toFixed(1);
//     }
// }

// const rectangler = new rectangle(3,4);

// rectangler.width = -10000;
// rectangler.height = "wad";


// console.log(rectangler.width);
// console.log(rectangler.height);
// console.log(rectangler.area);


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("must be non empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("must be non empty string");
        }
    }

    set age(newAges){
        if(typeof newAges === "number" && newAges >= 0){
            this._age = newAges;
        }
        else{
            console.error("must be non empty string");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName
    }

    get age(){
        return this._age
    } // klo get ini ga ada nanti outputnya akan undefinied

    get fullname(){
        return `nama panjang anda = ${this._firstName + " " + this._lastName}`
    }
}

const person = new Person("max","bob",12)
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullname)
