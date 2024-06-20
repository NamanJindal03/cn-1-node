//main file -> two.js
// const operations = require('./operations.js')

// // console.log(operations);
// const sum = operations.add(10, 20);
// console.log(sum);
//added one more thing
const {subtract, add} = require('./operations.js')
const sum = add(10, 20); //30 - temp
console.log(sum);