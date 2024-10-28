// callback = a function that is passed as an argument to another function
// used to handle asychchronous operations :
// 1. reading a file
// 2. network request
// 3. interacting with databases

// "hey, when your done, call this next yea"

//simple example
function hello(varterserahmaoapa){
    console.log("helloow");
    varterserahmaoapa(); // disini di callback
}

function goodbye(){
    console.log("goodbye")
}

function leave(){
    console.log("leave me ke dua")
}

hello(leave);
goodbye();

//advance example

function sum(callback, x, y){
    let result = x + y;
    callback(result)
}

function printin(result){
    console.log(result)
}

sum (printin,4,5);