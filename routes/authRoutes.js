import express from 'express';
import * as authController from '../controllers/authController.js';
const router = express.Router();

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.post('/logout', authController.postLogout);

export default router;
