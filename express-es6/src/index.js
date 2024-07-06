import express from 'express'
import allRoutes from './routes/index.routes.js'

const app = express();
app.use(express.json()); //extracting the data and putting it on req.body

// app.get('/product/:productId', getProductDetails);
// app.use('/order', )
app.use('/', allRoutes)



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