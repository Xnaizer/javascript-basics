// ES6 Module = an external file that contains reusable code that can be imported into another js script.
//      can contain variables, classes, function.. and more 
//      introduced as part of ECMAScript 2015 update

import { PI, getKeliling } from './mathutil.js';

console.log(PI);

const circum = getKeliling(10);

console.log(`${circum.toFixed(2)}`);
