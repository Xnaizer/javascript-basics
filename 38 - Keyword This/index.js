// this = reference to the object where THIS is used (the object depend on the immediate context)
// person.name = this.name

const person1 = {
    name : "war",
    food : "big",
    sayhello : function(){console.log(`hi! ${person1.name}`)},
    sayhello1 : function(){console.log(`hi! ${this.name}`)}
}

person1.sayhello();
person1.sayhello1();
// sayhello : function(){console.log(`hi! ${name}`)} 
// klo itu aja ga bisa keluar outputnya maka menggunakan this
// GA BISA PAKE ARROW FUNC