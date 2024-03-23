// static = keyword that defines properties or methods that belong to a class isself rather than the object created from that class (class own anything static, not the object)

class mathutil{
    static PI = 3.14159;
    // dos = "wae" //ini gabisa dikeluarin di outputnya
    static getdia(radius){
        return radius * 2;
    }
}

console.log(mathutil.PI)
console.log(mathutil.dos)
console.log(mathutil.getdia(2))


class user{
    static usercount = 0;

    constructor(username){
        this.username = username;
        user.usercount++;
    }

    sayhello(){
        console.log(`say hello ${this.username}`)
    }
}

const user1 = new user("max")
const user2 = new user("max1")
const user3 = new user("max2")
console.log(user1.username)
console.log(user2.username)
console.log(user3.username)
console.log(user1.usercount) // gabisa karna usercount milik si class
// maka yang dipanggil untuk mengetahui berapa banyak usernya, dengan memanggil class

console.log(user.usercount)
user1.sayhello(`say hello ${this.username}`)
user2.sayhello(`say hello ${this.username}`)
user3.sayhello(`say hello ${this.username}`)