const express = require('express');
const app = express();

/* 
    at what portt the server should listen

    http://localhost:3000
*/

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



app.listen(3001, ()=>{
    console.log('Server started at port', 3001)
})


/* 
    end point -> method + path

*/
