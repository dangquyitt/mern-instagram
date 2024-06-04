import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
  {
    recipients: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
    text: String,
    media: Array,
    call: Object
  },
  {
    timestamps: true
  }
);

const Conversations = mongoose.model('conversations', conversationSchema);

export default Conversations;
