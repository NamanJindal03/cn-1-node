import fs from 'fs'
const existingData = [{name:'abcdc', age: 20}]
existingData.push({name:'naman', age:10})
console.log(existingData);
console.log(JSON.stringify(existingData))
/* 
    JSON.parse

    fs.readFile('./userData', (err, data) => {
        const userData = JSON.parse(data);

    })
*/

fs.writeFile('./userData', existingData, (err)=>{
    if(err){
        throw err
    }
    console.log('worked');
})