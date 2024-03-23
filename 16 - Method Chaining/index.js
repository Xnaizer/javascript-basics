// Method chaining = calling one method after another in one continious line of codes

let username = window.prompt("Enter Your Username :");

// // NO METHOD CHAINING


// username = username.trim();  // menghapus spasi yang ada pada input
// let letter = username.charAt(0) // mengambil huruf pertama dari input

// letter = letter.toUpperCase(1);

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;

// console.log(username)

// //    xNaiZer 
// // menjadi
// //Xnaizer


// METHOD CHAINING

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)