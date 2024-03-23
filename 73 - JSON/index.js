/*
Json = javascript object notation is data interchange format used for exchanging data between a server and a web aplication
json files {key:value} or [value1, value2, value3]

JSON.stringfy() = converts a js object to a json string.
JSON.parse() = converts a JSON strign to a JS Object
*/

const names = ["max","bob","sandy","martin"];
const jsonString = JSON.stringify(names);
console.log(jsonString)
console.log(names)





const person = {
    "name": "max",
    "age" : 30,
    "iskerja" : false,
    "hobi" : ["berenang", "mancing"]

}
const jsonString1 = JSON.stringify(person);
console.log(jsonString1)
console.log(person)



const people = [{
    "name": "max",
    "age" : 30,
    "iskerja" : false,
    "hobi" : ["berenang", "mancing"]

},
{
    "name": "bob",
    "age" : 12,
    "iskerja" : true,
    "hobi" : ["terbang", "mancing"]

},
{
    "name": "sandy",
    "age" : 21,
    "iskerja" : false,
    "hobi" : ["tenggelam", "terbang"]

},
{
    "name": "martin",
    "age" : 30,
    "iskerja" : false,
    "hobi" : ["marah", "mancing"]

}];


const jsonString2 = JSON.stringify(people);
console.log(jsonString2)
console.log(people)


// singkatnya json string jdiin file json jdi string
// json parse dri string jdi json

const jsonname = `["max","bob","sandy","martin"]`;
const paseddata = JSON.parse(jsonname);
console.log(paseddata)
