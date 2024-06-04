import express from 'express';
import authMiddleware from '../middleware/auth-middleware.js';
import messageController from '../controller/message-controller.js';

const messageRouter = express.Router();

messageRouter.post('/message', authMiddleware, messageController.createMessage);

messageRouter.get('/conversations', authMiddleware, messageController.getConversations);

messageRouter.get('/message/:id', authMiddleware, messageController.getMessages);

messageRouter.delete('/message/:id', authMiddleware, messageController.deleteMessages);

messageRouter.delete('/conversation/:id', authMiddleware, messageController.deleteConversation);

export default messageRouter;
