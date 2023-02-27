const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  message: {
    type: String,
    required: true,
  },
  creator: String,
  tags: [String],
  selectedFiles: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("PostMessage", postSchema);
