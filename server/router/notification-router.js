import express from 'express';
import authMiddleware from '../middleware/auth-middleware.js';
import notificationController from '../controller/notification-controller.js';

const notificationRouter = express.Router();

notificationRouter.post('/notify', authMiddleware, notificationController.createNotification);

notificationRouter.delete('/notify/:id', authMiddleware, notificationController.removenotification);

notificationRouter.get('/notifies', authMiddleware, notificationController.getNotifications);

notificationRouter.patch(
  '/isReadNotify/:id',
  authMiddleware,
  notificationController.isReadnotification
);

notificationRouter.delete(
  '/deleteAllNotify',
  authMiddleware,
  notificationController.deleteAllNotifications
);

export default notificationRouter;
