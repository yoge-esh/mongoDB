import express from 'express';
import cartController from '../controllers/cartController';

const router = express.Router();
const cart = new cartController();

router.post("/cart/save", cart.storeCart);
router.get("/cart/byUserID", cart.getCartByUserId);

export default router;