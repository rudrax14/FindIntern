const Message = require("../models/Message");
const catchAsync = require("../utils/catchAsync");
const populateMessage = require("../utils/populateMessage");

exports.getChatHistory = catchAsync(async (req, res) => {
    
      let { senderType, senderId, receiverType, receiverId } = req.query;
      // console.log(req.query)
      senderType = senderType === "jobseeker"?"User":"Company";
      receiverType = receiverType === "jobseeker"?"User":"Company";
      let messages = await Message.find({
        $or: [
          { 'sender.id': senderId, 'sender.type': senderType, 'receiver.id': receiverId, 'receiver.type': receiverType },
          { 'sender.id': receiverId, 'sender.type': receiverType, 'receiver.id': senderId, 'receiver.type': senderType }
        ]
      }).sort({ timestamp: 1 }); // Sort messages by timestamp
      // console.log(messages)
      // Populate messages
      messages = await Promise.all(messages.map(populateMessage));
  
      res.status(200).json(messages);
    
  });