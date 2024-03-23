// //date(year,month,day,hour,minute,sec,ms)
// const date = new Date(2024,0,4,2,32,12);
// const date1 = new Date("2024-02-01");
// console.log(date)
// console.log(date1)

const date2 = new Date();

const year = date2.getFullYear();
const month = date2.getMonth();
const day = date2.getDate();
const hour = date2.getHours();
const minutes = date2.getMinutes();
const seconds = date2.getSeconds();
const dayofweek = date2.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayofweek)

const date3 = new Date();

date3.setFullYear(2004)
console.log(date3)