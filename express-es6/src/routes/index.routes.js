import { Router } from "express";
const router = Router();

import productRouter from './product.routes.js'

//usecase of multer - inside the post
router.use('/product', productRouter);
//router.use('/order', orderRouter);





export default router;