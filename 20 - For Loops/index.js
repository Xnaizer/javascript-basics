// for loop = repeat some code a limited amount of times

for(let i = 0; i <= 3; i++){
    console.log(`hello ${i}`);
}

for(let i = 2; i <= 8; i+=2){
    console.log(`hellow ${i}`);
}

// for(let i = 10; i > 0; i--){
//     console.log(`hellow ${i}`);
// }

console.log("happy new year")



// skip 13
for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        continue;
    }
    else{
        console.log(i)
    }

    
}

// stop loop / stop program
for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        break;
    }
    else{
        console.log(i)
    }

    
}