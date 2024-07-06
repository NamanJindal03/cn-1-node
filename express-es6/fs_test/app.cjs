// import fs from 'fs'
const fs = require('fs')
// import path from 'path'

/* join */
// D:\cn_1\express-es6\src\fs_test\tempData\one.txt


fs.readFile('./tempData/one.txt','utf-8', (err, data)=>{
    if(err) throw err;
    const storePreviousFileData = data;
    console.log(storePreviousFileData);

    fs.writeFile('./tempData/one.txt', 'this infoefewfwefewrmation will be overwrittenriefiefj', (err)=>{
        if(err) throw err; //terminate
        console.log('write was successfully');
    })

})










/* 
    fs
    fs promise module

*/

/* 
    Dealign with async code ->
        1) Callbacks ->> 
        2) Promise based fucntionn

    new Promise((reolve, reject))

*/