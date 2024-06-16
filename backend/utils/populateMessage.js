// utils/populateMessage.js
const User = require('../models/User');
const Company = require('../models/Company');

const populateMessage = async (message) => {
  if (message.sender.type === "jobseeker") {
    message.sender.id = await User.findById(message.sender.id);
  } else {
    message.sender.id = await Company.findById(message.sender.id);
  }

  if (message.receiver.type === 'jobseeker') {
    message.receiver.id = await User.findById(message.receiver.id);
  } else {
    message.receiver.id = await Company.findById(message.receiver.id);
  }

  return message;
};

module.exports = populateMessage;
