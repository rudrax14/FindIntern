const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  media: String, // URL or reference to media content (e.g., image, video)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to users who liked the post
  }],
  comments: [{
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
      unique: true,
      
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // Reference to the User model who made the comment
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
