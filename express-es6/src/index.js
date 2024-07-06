import express from 'express'
import productRouter from './routes/product.routes.js'

const app = express();
app.use(express.json()); //extracting the data and putting it on req.body

// app.get('/product/:productId', getProductDetails);
app.use('/product', productRouter)



app.listen(3000, ()=>{
    console.log('es6 server listening at port', 3000)
})


/* 
    CRUD -> product 

    Creating -> Post /product 
    Reading -> Get /product/:productId
    Updating -> Put /product/:productId
    delete -> delete /product/:productId
*/