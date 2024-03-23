//string slicing = creating a substring from a portion of another string

//      string.slice(start,end)

const fullnames = "nakatashi nakamoto" ;

let fnames = fullnames.slice(0,3);
console.log(fnames);

let lastname = fullnames.slice(15,18);
console.log(lastname);

let las1nam = fullnames.slice(-3);
console.log(las1nam);

let fnnname = fullnames.slice(0, fullnames.indexOf(" "));
let fnnname1 = fullnames.slice( fullnames.indexOf(" ") + 1);
// +1 disini menghapus spasi didepan nakamoto sebanyak 1
console.log(fnnname);
console.log(fnnname1);

const email = "akataka@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"))

console.log(username)
console.log(extension)