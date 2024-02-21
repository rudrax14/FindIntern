const Job = require('../models/Job');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const Admin = require('../models/Admin');

// admin profile
exports.adminProfile = catchAsync(async (req, res, next) => {
  const adminProfile = await Admin.findById(req.user.id);
  res.status(200).json({
    status: 'Success',
    profile: adminProfile
  })
});

exports.approveJobRequest = catchAsync(async (req, res, next) => {
  const jobId = req.params.jobId; // Assuming you have the job ID in the request params


  // Find the job by ID
  const job = await Job.findById(jobId);

  if (!job) {
    next(new AppError('Job not found', 404))
  }

  // Update the job's approved field to true
  const result = await Job.updateOne({ _id: jobId }, { $set: { approved: true } });

  if (result.nModified === 0) {
    return res.status(200).json({
      status: 'Success',
      message: 'Job request is already approved',
    });
  }

  res.status(200).json({
    status: 'Success',
    message: 'Job request approved successfully',
  });



});

exports.denyAndDeleteJobRequest = async (req, res, next) => {

  const jobId = req.params.jobId; // Assuming you have the job ID in the request params


  // Find the job by ID
  const job = await Job.findById(jobId);

  if (!job) {
    return next(new AppError('Job not found', 404));
  }

  // Delete the job
  await Job.deleteOne({ _id: jobId });

  res.status(200).json({
    status: 'Success',
    message: 'Job request denied and deleted successfully',
  });



};
