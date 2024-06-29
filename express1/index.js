const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;
let numberOfProducts = 11;
/* 
    at what portt the server should listen

    http://localhost:3000
*/
function generatateRandomNumber(){
    return Math.random()*100
}
app.get('/product', (req, res)=>{
    console.log('logged')
    //fetching some product 
    //aligning those product
    //doing sanity of those product
    //makign a product array of object
    // const product = [{'name': 'iphone', cost: 110000},{'name': 's series', cost: 10000}]
    // return res.end('returned products array of objects');
    
    //you read the db -> product.size()

    if(numberOfProducts > 10){
        return res.end('a big product array is coming');
    }
    return res.end('do somethign');

    console.log('I am not ended yet, hahahahahaha')
})

app.get('/product/:productId', (req, res)=>{
    console.log(req.params.productId);
    res.end('all product would come over here');
})
app.get('/product/:categoryId/item', (req, res)=>{ //preference
    console.log(req.params);
    res.end('I am smart, I will process item');
})
app.get('/product/:categoryId/:productId', (req, res)=>{
    console.log(req.params);
    res.end('processing multiple path params');
})
///product/:typeID/:CustomID
//product/:categoryId/item


app.get('/product/:productId/lllp', (req, res)=>{
    console.log(req.params.productId);
    res.end('static after dynamic');
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

//assignemtn numbers -> static and dynamic paths
app.get('/number/multiply/:num1/:num2', (req, res) => {
//     const num1=req.params.num1;
//     const num2=req.params.num2;
    const {num1, num2} = req.params; //code suggestion
    const ans=num1*num2;
    res.end(` the multiply Number is: ${ans}`);
});
app.get('/number/add/:num1/:num2', (req, res) => {
  const num1=req.params.num1;
  const num2=req.params.num2;
  const ans=num1+num2;
  res.end(`the add Number is: ${ans}`);
});
app.get('/number/:operation/:num1/:num2', (req, res) => {
    const num1=parseInt(req.params.num1);
    const num2=parseInt(req.params.num2);
    const operation = req.params.operation
    if(operation === 'divide'){
        return res.end(`${num1/num2}`)
    }
    else if(operation === 'subtract'){
        return res.end(`${num1-num2}`)
    }
    // const divide=num1/num2;
    // const sub=num1-num2;
    // if(divide) return res.end(`the add Number is: ${ans}`);
    // return res.end(`the add Number is: ${sub}`);
});
/* 
    /number/subtract/10/5
    /number/divide/10/5
*/

app.get('*', (req, res)=>{
    res.end('you are making some mistake, please chekc the api');
    //a properly generated error -> rely on express ->
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