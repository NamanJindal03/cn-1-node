const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const rootMiddlewares = require('./middlewares/root')

// app.use(express.json());

app.get('/number/:number', (req, res) => {
    const {number} = req.params;
    console.log(parseInt(number));

    if(number === 0){
        const response = {
            number: number,
            odd: false,
            even: false
        }
        return res.status(404).json(response);
    }
    else if(number %2 === 0){
        //even number
        const response = {
            number: number,
            even: true
        }
        return res.status(200).json(response);
    }
    else if(number %2 === 1){
        //odd number
        const response = {
            number: number,
            odd: true
        }
        return res.status(400).json(response);
    }
    else{
        return res.status(500).json({});
    }
})

app.post('/number', (req, res)=>{
    console.log(req.body);
    //when we receive some data from the FE -> which we are not doing over here we will see that soon
    res.status(200).json({message: 'number received - IKYK'})
})



app.get('/sample', [rootMiddlewares.first, rootMiddlewares.second,(req, res)=>{
    console.log('third12')
    res.json({done: true})
}])

function generateRandomNumberMiddleware(req, res, next){
    const randomNum = Math.random();
    req.number = randomNum;
    next()
}

app.get('/products', generateRandomNumberMiddleware, (req, res) => {
    // console.log(req.number);
    res.json(req.number)
})

app.get('/orders', generateRandomNumberMiddleware, (req, res) => {
    res.json(req.number)
})

app.get('/users',generateRandomNumberMiddleware, (req, res) => {
    res.json(req.number)
})

app.get('/not-needed', (req, res)=>{
    res.json(10);
})



/* 
    app.method('path', [middlewareA, middlewareB, finalFunc])
    app.method('path', middlewareA, middleware, finalFunc)
*/


app.listen(PORT, ()=>{
    console.log('Server started at port', PORT)
})

