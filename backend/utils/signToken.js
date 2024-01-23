const jwt = require('jsonwebtoken')

module.exports = async (obj) => {
    return await jwt.sign(obj, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY
    });
  };