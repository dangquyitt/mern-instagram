import express from 'express';
import authMiddleware from '../middleware/auth-middleware.js';
import userController from '../controller/user-controller.js';

const userRouter = express.Router();

userRouter.get('/search', authMiddleware, userController.searchUser);

userRouter.get('/user/:id', authMiddleware, userController.getUser);

userRouter.patch('/user', authMiddleware, userController.updateUser);

userRouter.patch('/user/:id/follow', authMiddleware, userController.follow);

userRouter.patch('/user/:id/unfollow', authMiddleware, userController.unfollow);

userRouter.get('/suggestionsUser', authMiddleware, userController.suggestionsUser);

export default userRouter;
