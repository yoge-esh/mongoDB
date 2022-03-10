import express from "express";
import userController from "../controllers/userController.js";
import authController from "../controllers/authController.js";

const router = express.Router();
const user = new userController();
const auth = new authController();

router.get("/user/showAllUser", user.showAllUser);
router.get("/user/getUserById", user.getUserById);
router.get("/user/getUserByUsername", user.getUserByUsername);
router.post("/user/register", auth.register);
router.post("/user/login", auth.login);

export default router;