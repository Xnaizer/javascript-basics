// inheritance = allows a new class to inherit properties and methods from an existing class ( parent --> child ) 
//hleps with code reusability

class animal{
    alive = true;

    eat(){
        console.log(`this ${this.name} is eat`)
    }

    sleep(){
        console.log(`this ${this.name} is slepp`)
    }
}

class rabbit extends animal{
    name = "rabit";

    run(){
        console.log(`this ${this.name} is running`)
    }
}

class fish extends animal{
    name = "fish";

    fly(){
        console.log(`this ${this.name} is fly`)
    }
}

const rabit = new rabbit();
const fis = new fish();

console.log(rabit.alive);
rabit.eat();
rabit.sleep();
rabit.run();
// fish.run(); //ini akan eror karna bukan di classnya
