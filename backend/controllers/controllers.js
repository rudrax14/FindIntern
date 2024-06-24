const { default: mongoose } = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
const Company = require("../models/Company");


exports.profile = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    let { username } = req.query
    
    
    // Validate input
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid ID format'
      });
    }
  
    // Search in User collection
    let result = await User.findOne({ _id: id, username });
  
    // If not found in User collection, search in Company collection
    if (!result) {
      result = await Company.findOne({ _id: id, username });
    }
  
    // If still not found, return 404
    if (!result) {
      return res.status(404).json({
        status: 'fail',
        message: 'No matching document found'
      });
    }
    
    // Return the found document
    res.status(200).json({
      status: 'success',
      data: result
    });
});
  