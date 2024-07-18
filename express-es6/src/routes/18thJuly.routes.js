import { Router } from "express";
import { handleProductPut } from "../controllers/18thJuly.controller";
const router = Router();

router.route('/product/:productId')
    .put(handleProductPut)





export default router;




