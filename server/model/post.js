import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    content: String,
    images: {
      type: Array,
      require: true
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
    user: { type: mongoose.Types.ObjectId, ref: 'user' }
  },
  {
    timestamps: true
  }
);

const Posts = mongoose.model('posts', postSchema);

export default Posts;
