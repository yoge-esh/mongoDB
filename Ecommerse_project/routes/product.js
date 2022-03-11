import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();
const product = new productController();

router.post("/product/save", product.storeProduct);
router.get("/product/all", product.showAllProduct);
router.get("/product", product.getProductById);

export default router;
