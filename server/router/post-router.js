import express from 'express';
import authMiddleware from '../middleware/auth-middleware.js';
import postController from '../controller/post-controller.js';

const postRouter = express.Router();

postRouter
  .route('/posts')
  .post(authMiddleware, postController.createPost)
  .get(authMiddleware, postController.getPosts);

postRouter
  .route('/post/:id')
  .patch(authMiddleware, postController.updatePost)
  .get(authMiddleware, postController.getPost)
  .delete(authMiddleware, postController.deletePost);

postRouter.patch('/post/:id/like', authMiddleware, postController.likePost);

postRouter.patch('/post/:id/unlike', authMiddleware, postController.unLikePost);

postRouter.get('/user_posts/:id', authMiddleware, postController.getUserPosts);

postRouter.get('/post_discover', authMiddleware, postController.getPostsDiscover);

postRouter.patch('/savePost/:id', authMiddleware, postController.savePost);

postRouter.patch('/unSavePost/:id', authMiddleware, postController.unSavePost);

postRouter.get('/getSavePosts', authMiddleware, postController.getSavePosts);

export default postRouter;
