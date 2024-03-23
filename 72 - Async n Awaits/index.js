/*
async/await = 

async = make a function return a promise
await = makes an async function wait for a promise

allows you write asynchronous code in a synchronous manner 
async doesnt have resolve or reject parameters
everything after await is placed in an event queue


*/

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
            const trashout1 = true;

            if(trashout1){
                resolve("you trashed");
            }
            else{
                reject("you not trashed");

            }
        },2300);
    })
}

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//             .then(value => {console.log(value); return trashOut()})
//             .then(value => {console.log(value); console.log("selesai")})
//             .catch(error => console.error(error)); // ini gausa


async function doChores(){
    try{
        const walkDog1 = await walkDog();
        console.log(walkDog1);

        const cleanKitchen1 = await cleanKitchen();
        console.log(cleanKitchen1);

        const trashOut1 = await trashOut();
        console.log(trashOut1);

        console.log("all done")
    }
    catch(error){
        console.error(error)
    }
}
doChores()