import fs from 'fs/promises'
// const fs = require('fs').promises
import path from 'path'

/* join */
// D:\cn_1\express-es6\src\fs_test\tempData\one.txt

// fs.readFile('./tempData/one.txt','utf-8', (err, data)=>{
//     if(err) throw err;
//     const storePreviousFileData = data;
//     console.log(storePreviousFileData);

//     fs.writeFile('./tempData/one.txt', 'this infoefewfwefewrmation will be overwrittenriefiefj', (err)=>{
//         if(err) throw err; //terminate
//         console.log('write was successfully');
//     })

// })

// const abcd = fs.readFile('./tempData/one.txt','utf-8');
// abcd.then((data)=>{
//     console.log(data);
//     return fs.appendFile('./tempData/one.txt', '.then executed somehow')
// })
// .then((data)=>{
//     console.log(data);
//     console.log('append is succesfully');
// })
// .catch((err)=>{
//     console.log(err);
// })

// const fs = require('fs').promises;
async function readFileAndWrite() {
    try {
        const data = await fs.readFile('./tempData/one.txt', 'utf-8');
        console.log('Previous file data:');
        console.log(data);
        const newData = 'this information will be overwritten';
        await fs.writeFile('./tempData/one.txt', newData);
    } catch (err) {
        console.log('Error:', err);
    }
}
readFileAndWrite();

// fs.unlink('./tempData/one.txt', (err) =>{
//     if(err) {
//         console.log('error deleting the file, try again after sometime');
//         return;
//     }
//     console.log('file was successfully deleted')
// })


// if(fs.existsSync('./tempData/one.txt','utf-8')){
//     fs.readFile('./tempData/one.txt','utf-8', (err, data)=>{
//         if(err) throw err;
//         const storePreviousFileData = data;
//         console.log(storePreviousFileData);

//         fs.appendFile('./tempData/one.txt', '\nthis is the new data,enjoy!!!', (err)=>{
//             if(err) throw err; //terminate
//             console.log('append was successfully');
//         })
//     });
// }


/* 
    EJS -> 

    React(view) + Node (Model and controller)

    Node (EJS(view) , Model and controller)
*/







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