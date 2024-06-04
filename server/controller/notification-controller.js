import Notifications from '../model/notification.js';

const notificationController = {
  createNotification: async (req, res) => {
    try {
      const { id, recipients, url, text, content, image } = req.body;

      if (recipients.includes(req.user._id.toString())) return;

      const notification = new Notifications({
        id,
        recipients,
        url,
        text,
        content,
        image,
        user: req.user._id
      });

      await notification.save();
      return res.json({ notification });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  removenotification: async (req, res) => {
    try {
      const notification = await Notifications.findOneAndDelete({
        id: req.params.id,
        url: req.query.url
      });

      return res.json({ notification });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getNotifications: async (req, res) => {
    try {
      const Notifications = await Notifications.find({ recipients: req.user._id })
        .sort('-createdAt')
        .populate('user', 'avatar username');

      return res.json({ Notifications });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  isReadnotification: async (req, res) => {
    try {
      const Notifications = await Notifications.findOneAndUpdate(
        { _id: req.params.id },
        {
          isRead: true
        }
      );

      return res.json({ Notifications });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteAllNotifications: async (req, res) => {
    try {
      const Notifications = await Notifications.deleteMany({ recipients: req.user._id });

      return res.json({ Notifications });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
};

export default notificationController;
