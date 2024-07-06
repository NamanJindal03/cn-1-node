import { Router } from "express";
import { getProductDetails, addProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";
const router = Router();

router.route('/')
    .post(addProduct) 

router.route('/:productId')
    .get(getProductDetails)
    .put(updateProduct)
    .delete(deleteProduct)

export default router;


