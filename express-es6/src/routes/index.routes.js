import { Router } from "express";
const router = Router();

import productRouter from './product.routes.js'


router.use('/product', productRouter);
//router.use('/order', orderRouter)

export default router;