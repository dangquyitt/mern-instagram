import express from 'express';
import authController from '../controller/auth-controller.js';

const authRouter = express.Router();

authRouter.post('/register', authController.register);

authRouter.post('/login', authController.login);

authRouter.post('/logout', authController.logout);

authRouter.post('/refresh_token', authController.generateAccessToken);

export default authRouter;
