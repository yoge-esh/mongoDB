import express from 'express';
import categoryController from '../controllers/categoryController';

const router = express.Router();
const category = new categoryController();

router.post("/category/save", category.storeCategory);
router.get("/category/all", category.showAllCategory);
router.get("/category", category.getCategoryById);

export default router;
