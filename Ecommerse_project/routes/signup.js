
import { Router } from 'express';
import signupController from '../controllers/signupController.js';

const signupObj = signupController();
const router = Router();

router.post('/user', signupObj.signupUser);
router.post('/customer', signupObj.signupUser);

export default router;