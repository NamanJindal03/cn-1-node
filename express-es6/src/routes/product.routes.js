import { Router } from "express";
import { getProductDetails, addProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";
import { upload } from "../middlewares/upload-file.middleware.js";
import fs from 'fs'
const router = Router();
import path from 'path'

import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

// router.route('/')
//     .post(upload.single('image') ,addProduct) 

router.route('/')
    .post(upload.fields([{name: 'img1'}, {name: 'img2'}]) ,addProduct) 

router.route('/:productId')
    .get(getProductDetails)
    .put(updateProduct)
    .delete(deleteProduct)

router.route('/test/1')
    .get((req, res, next)=>{
        fs.readFile(path.join(__dirname, '..', 'images', 'temp.txt'), 'utf-8', (err, data)=>{
            if(err) console.log(err);
            console.log(data)
        })
    })

export default router;


