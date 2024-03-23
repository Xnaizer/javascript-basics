//random password generator

function generatePassword(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "01234567890";
    const symbolsChars = "!@#$%^&*()_-=+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if(length <= 0){
        return `(password minimun legth must be at 1)`;
    }
    if(allowedChars.length === 0){
        return `(at least 1 set of character need to be selected)`
    }

    for(let i = 0; i < length; i ++){
        const randomIndex = Math.floor( Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }
    

    return password;
}

const passwordLength = 21;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = false;

const password = generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

console.log(`generated pass: ${password}`);