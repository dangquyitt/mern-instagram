import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import authRouter from './router/auth-router.js';
import commentRouter from './router/comment-router.js';
import messageRouter from './router/message-router.js';
import notificationRouter from './router/notification-router.js';
import postRouter from './router/post-router.js';
import userRouter from './router/user-router.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', authRouter);
app.use('/api', commentRouter);
app.use('/api', messageRouter);
app.use('/api', notificationRouter);
app.use('/api', postRouter);
app.use('/api', userRouter);

export default app;
