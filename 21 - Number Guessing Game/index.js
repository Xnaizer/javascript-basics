// Number Guessing game

const minum = 20;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minum +1)) + minum;

let attemps = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minum} - ${maxnum}`)
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid Number");
    }
    else if(guess < minum || guess > maxnum ) {
        window.alert("plese enter a valid number");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("too low try again")
        }
        else if(guess > answer){
            window.alert("too high try again")
        }
        else{
            window.alert(`correct! the answer was ${answer}`)
            running = false;
        }
    }
}