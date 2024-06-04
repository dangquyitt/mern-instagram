import express from 'express';
import authMiddleware from '../middleware/auth-middleware.js';
import commentController from '../controller/comment-controller.js';

const commentRouter = express.Router();

commentRouter.post('/comment', authMiddleware, commentController.createComment);

commentRouter.patch('/comment/:id', authMiddleware, commentController.updateComment);

commentRouter.patch('/comment/:id/like', authMiddleware, commentController.likeComment);

commentRouter.patch('/comment/:id/unlike', authMiddleware, commentController.unLikeComment);

commentRouter.delete('/comment/:id', authMiddleware, commentController.deleteComment);

export default commentRouter;
