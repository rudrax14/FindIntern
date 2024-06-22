const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: [String],
  period: String,
  type: {
    type: String,
    enum: ['Full-Time', 'Part-Time']
  },
  department: {
    type:String
  },
  salary: Number,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },

  appliedUsers: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    dateApplied: {
      type: Date,
      default: Date.now
    },
    isSelected:{
      type:Boolean,
      default:false
    }

  }],
  approved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
