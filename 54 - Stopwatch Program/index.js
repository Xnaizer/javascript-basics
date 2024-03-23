const display = document.getElementById("display");
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isrunning = false;

function start(){
    if(!isrunning){
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
        isrunning = true;
    }
}

function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isrunning = false;
    }
}

function reset(){
    clearInterval(timer);
    starttime = 0;
    elapsedtime = 0;
    isrunning = false;
    display.textContent = "00:00:00:00"
}

function update(){
    const currenttime = Date.now();
    elapsedtime = currenttime - starttime;
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / ( 1000 * 60) % 60);
    let seconds = Math.floor(elapsedtime / 1000 % 60);
    let miliseconds = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2,0);
    minutes = String(minutes).padStart(2,0);
    seconds = String(seconds).padStart(2,0);
    miliseconds = String(miliseconds).padStart(2,0);

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}