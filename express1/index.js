const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

/* 
    at what portt the server should listen

    http://localhost:3000
*/
function generatateRandomNumber(){
    return Math.random()*100
}
app.get('/product', (req, res)=>{
    //fetching some product 
    //aligning those product
    //doing sanity of those product
    //makign a product array of object
    // const product = [{'name': 'iphone', cost: 110000},{'name': 's series', cost: 10000}]
    res.end('returned products array of objects');
})
app.get('/', (req, res)=>{
    res.end('this is a generic root route')
})

app.get('/random', function(_, res){
    res.write(JSON.stringify(generatateRandomNumber()));
    res.end()
})

app.get('/random-sum', function(_,res) {
    res.write(JSON.stringify(generatateRandomNumber()+ generatateRandomNumber()));
    res.end();
})

app.listen(PORT, ()=>{
    console.log('Server started at port', PORT)
})


/* 
    end point -> method + path

*/

function sample(a, b, c, d){
    //b c d are optional parameters

}
sample('something');


function sample(a, b, c, d){
    //a c d are optional parameters

}
sample('something');