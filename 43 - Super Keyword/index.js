// super = keyword is used in clases to call the constructo or access the properties and methods of a parents ( superclass)
// this = this object
// super = the parent

// class animal{
//     constructor(){

//     }
// }

// class fish extends animal{
//     constructor(name, age, swimspeed){
//         super();
//         this.name = name;
//         this.age = age;
//         this.swimspeed = swimspeed;
//     }
// }

// class rabbit extends animal{
//     constructor(name, age, runspedd){
//         super();
//         this.name = name;
//         this.age = age;
//         this.runspedd = runspedd;
//     }
// }

// const rabbitt = new rabbit("rabuuit", 1, 21);
// const fishh = new fish("adads",1,23);

// console.log(rabbitt)
// console.log(fishh)

// jikalau menggunakan super

class animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`this ${this.name} move at ${speed}`)
       
    }
}

class fish extends animal{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed;
    }
}

class rabbit extends animal{
    constructor(name, age, runspeed){
        super(name,age);
        this.runspeed = runspeed;
    }

    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.runspeed);
        
    }
}

const rabbitt = new rabbit("rabuuit", 1, 21);
const fishh = new fish("adads", 1, 23);

console.log(rabbitt)
console.log(fishh)
console.log(fishh.name)
console.log(rabbitt.age)
console.log(fishh.runspedd)

rabbitt.run();
