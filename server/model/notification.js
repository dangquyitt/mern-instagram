import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    id: mongoose.Types.ObjectId,
    user: { type: mongoose.Types.ObjectId, ref: 'user' },
    recipients: [mongoose.Types.ObjectId],
    url: String,
    text: String,
    content: String,
    image: String,
    isRead: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

const Notifications = mongoose.model('notifications', notificationSchema);

export default Notifications;
