import { Router } from "express";
import { handleProductPut, getFilteredProduct, getFilteredProduct2 } from "../controllers/18thJuly.controller.js";
const router = Router();

router.route('/product/:productId')
    .put(handleProductPut)

router.route('/product')
    .get(getFilteredProduct2)



export default router;




