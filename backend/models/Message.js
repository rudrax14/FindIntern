const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  sender: {
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    type: { type: String, required: true, enum: ["User", "Company"] },
  },
  receiver: {
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    type: { type: String, required: true, enum: ["User", "Company"] },
  },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
