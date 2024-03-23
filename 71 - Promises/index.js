// Promise = an object that manages asynchronous operations.
//           wrap a promises object around {asynchronous code}
//            " I promises to retrun a value"
//           pending -> resolved or rejected
// new promises((resolve, reject) = > {asynchronous code})

// do these chores in order

//1. walk the dogs
//2. clean the kitchen
//3. take out the trash

function walkDog(){

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const dogwalked = true;

            if(dogwalked){
                resolve("you walk dog");
            }
            else{
                reject("you dont walk dog");

            }
        },2300);
    })
}


function cleanKitchen(){

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const celaned = true;

            if(celaned){
                resolve("you clean");
            }
            else{
                reject("you dont clean");

            }
        },1200);
    })
}

function trashOut(){

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const trashout1 = false;

            if(trashout1){
                resolve("you trashed");
            }
            else{
                reject("you not trashed");

            }
        },2300);
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
            .then(value => {console.log(value); return trashOut()})
            .then(value => {console.log(value); console.log("selesai")})
            .catch(error => console.error(error));