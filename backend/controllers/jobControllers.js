const Job = require("../models/Job");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const Company = require("../models/Company");
const mailSender = require("../utils/sendEmail");
const User = require("../models/User");
const mongoose = require('mongoose')
const filterJobObject = (jobObj, attrs) => {
  const filteredObj = Object.keys(jobObj)
    .filter((attr) => !attrs.includes(attr))
    .reduce((obj, key) => {
      obj[key] = jobObj[key];

      return obj;
    }, {});
  return filteredObj;
};

// Get All Jobs
exports.getAllJobs = catchAsync(async (req, res) => {
  let query = {};
  if (req.query) {
    if (req.query.approved) {
      query = req.query;
    }
  }
  // Fetch all jobs
  const jobs = await Job.find(query)
    .populate([{
      path: "postedBy",
      select: "name profileImgUrl",
    },
    {
      path: "appliedUsers.userId",
      select: "name age education skills profileImgUrl "
    }

  ])
    .sort({ createdAt: -1 });

  res.status(200).json({
    status: "Success",
    jobs,
  });
});

// Example usage in a route
// router.get('/jobs', getAllJobs);

// Get Single Job by ID
exports.getSingleJob = catchAsync(async (req, res, next) => {
  const jobId = req.params.jobId; // Replace with the actual job ID

  // Fetch the job by ID
  const job = await Job.findById(jobId).populate([{
    path: "postedBy", // Assuming 'postedBy' is the field in the Job model that references another model
    select: "profileImgUrl", // Select the 'profileImgUrl' from the related model
  },
  {
    path: "appliedUsers.userId",
    select: "name age education skills profileImgUrl username email"
  }
]);

  if (!job) {
    next(new AppError("Job not found", 404));
  }

  //await job.populate("profileImgUrl");
  // populate name age education skills
  res.status(200).json({
    status: "Success",
    job,
  });
});

// Example usage in a route
// router.get('/jobs/:jobId', getJobById);

exports.createJob = catchAsync(async (req, res) => {
  //for posting a job
  // you need to store the id of that company in job document
  // you need to store the id of that job in company docmument
  const job = req.body;

  // const job = {
  //   title,
  //   location,
  //   description,
  //   postedBy: req.params.companyId
  // };
  job.postedBy = req.user.id;

  const newJob = await Job.create(job);

  const companyId = req.user.id; // Replace with the actual company ID
  const jobId = newJob._id; // Replace with the actual job ID

  const query = { _id: companyId };
  const update = {
    $push: {
      jobs: jobId,
    },
    $set: {
      updatedAt: Date.now(),
    },
  };

  await Company.updateOne(query, update);

  res.status(200).json({
    status: "Success",
    message: "A new job has been posted",
    newJob,
  });
});

// Update Job by ID
exports.updateJob = async (req, res) => {
  const jobId = req.params.jobId; // Replace with the actual job ID
  const jobObj = req.body;
  jobObj.updatedAt = Date.now();

  // Check if the user is the one who posted the job
  const job = await Job.findById(jobId);
  if (!job || job.postedBy.toString() !== req.user.id) {
    next(new AppError("You don't have permission to update this job", 401));
  }

  // Update the job
  const updatedJobResult = await Job.findByIdAndUpdate(jobId, jobObj, {
    new: true,
  });

  // Optionally, you can also update the Company's updatedAt field
  //const companyId = job.postedBy;
  //await Company.findByIdAndUpdate(companyId, { $set: { updatedAt: Date.now() } });

  res.status(200).json({
    status: "Success",
    message: "Job updated successfully",
    updatedJob: updatedJobResult,
  });
};

// Example usage in a route
// router.put('/jobs/:jobId', updateJob);

// Delete Job by ID
exports.deleteJob = catchAsync(async (req, res) => {
  const jobId = req.params.jobId; // Replace with the actual job ID

  // Check if the user is the one who posted the job
  const job = await Job.findById(jobId);
  if (!job || job.postedBy.toString() !== req.user.id) {
    return next(
      new AppError("You don't have the permission to delete this job")
    );
  }

  // Delete the job
  await Job.findByIdAndDelete(jobId);

  // Remove the job ID from the associated company's jobs array
  const companyId = job.postedBy;
  await Company.findByIdAndUpdate(companyId, {
    $pull: { jobs: jobId },
    $set: { updatedAt: Date.now() },
  });

  res.status(200).json({
    status: "Success",
    message: "Job deleted successfully",
  });
});

// Example usage in a route
// router.delete('/jobs/:jobId', deleteJob);


exports.changeSelectionStatus = catchAsync(async (req, res, next) => {
  const jobId = req.params.jobId; // Replace with the actual job ID
  const { status,userId } = req.body;
  
  // Check if the user is the one who posted the job
  const job = await Job.findById(jobId);
  if (!job || job.postedBy.toString() !== req.user.id) {
    return next(
      new AppError("You don't have the permission to perform this action", 403)
    );
  }
  const id = new mongoose.Types.ObjectId(userId);
  const user = await User.findOne(id);
  if(!user){
    return next(
      new AppError("User not found",404)
    )
  }
  const email = user.email;

  if (status) {
    // Set isSelected to true to the specified user
    await Job.updateOne(
      { _id: jobId, 'appliedUsers.userId': userId },
      { $set: { 'appliedUsers.$[elem].isSelected': true } },
      { arrayFilters: [{ 'elem.userId': userId }] },
    
    );
    
    await mailSender(email,"Application Response",`You have been selected for ${job.title}. Please reach out to the recuriter through messaging on FindIntern if you are interested.`)

    return res.status(200).json({
      status: "Success",
      message: "Applicant has been selected",
    });
  } else {
    
    // Find the job by jobId and update it
    await Job.updateOne(
      { _id: jobId },
      { $pull: { appliedUsers: { userId: userId } } }
    );

    // Find the user by userId and update it
    await User.updateOne(
      { _id: userId },
      { $pull: { appliedJobs: { jobId: jobId } } }
    );

    await mailSender(email,"Application Response",`You have not been selected for ${job.title}. All the best on your future applications. `)

    return res.status(200).json({
      status: "Success",
      message: "Job deleted successfully",
    });
  }
});
