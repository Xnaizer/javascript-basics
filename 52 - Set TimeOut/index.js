// settimeout() = function in js that allow you to shecdule the execution of a function after an amount of time(miliseconds)
//                 time are approximate (varies based on the workload of the js runtime env)

//                 setTimeout(callback, delay)


// function syhello(){
//     window.alert("hello")

// }

// setTimeout(syhello, 3000)




// setTimeout(function(){window.alert("hello")}, 3000);



// setTimeout(() => window.alert("hello"), 3000)



// const timeoutId = setTimeout(() => window.alert("hello"), 3000)
// clearTimeout(timeoutId); //ini akan menghilangkan timeoutnya, makanya ga keluar alertnya




let timeoutId;

function starttimer(){
    timeoutId = setTimeout(() => window.alert("hello"), 3000)
}

function cleartimer(){
    clearTimeout(timeoutId)
    console.log("clear")
}