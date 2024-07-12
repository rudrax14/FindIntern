const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const Job = require("../models/Job");
const AppError = require("../utils/AppError");

const filterUserObject = (userObj, attrs) => {
  const filteredObj = Object.keys(userObj)
    .filter((attr) => !attrs.includes(attr))
    .reduce((obj, key) => {
      obj[key] = userObj[key];
      return obj;
    }, {});
  return filteredObj;
};

exports.userProfile = catchAsync(async (req, res, next) => {
  const userProfile = await User.findById(req.user.id);
  // const userProfile = {
  //     username:userDetails.username,
  //     email:userDetails.email,
  //     fullName:userDetails.fullName,
  //     location:userDetails.location&&userDetails.location!==""?userDetails.location:
  // }
  res.status(200).json({
    status: "Success",
    profile: userProfile,
  });
});

exports.updateUserProfile = catchAsync(async (req, res, next) => {
  const query = {};
  // if('skills' in req.body){
  //   const skills = req.body.skills;
  //   query['$addToSet'] = { skills:{$each:skills} };
  //   delete req.body.skills;
  // }

  const userObj = filterUserObject(req.body, [
    "password",
    
    "username"
    
  ]);
  query["$set"] = {
    updatedAt: Date.now(),
    ...userObj,
  };
  await User.findByIdAndUpdate(req.user.id, query);
  res.status(200).json({
    status: "Success",
    message: "User profile successfully updated",
  });
});

exports.applyJob = catchAsync(async (req, res, next) => {
  const jobId = req.params.jobId; // Replace with the actual job ID

  // Check if the job exists
  const job = await Job.findById(jobId);
  if (!job) {
    return next(new AppError("Job not found", 404));
  }

  // Assuming you have the authenticated user available in req.user
  const userId = req.user.id;

  // Check if the role is jobseeker
  if(req.user.role != "jobseeker"){
    return next(new AppError("You are not allowed to perform this action",401));
  } 

  // Check if the user has already applied for this job
  const alreadyApplied = await User.findOne({
    _id: userId,
    "appliedJobs.jobId": jobId,
  });
  if (alreadyApplied) {
    return next(new AppError("You have already applied for this job", 401));
  }

  //Add user to the appliedUsers array

  await Job.findByIdAndUpdate(jobId, {
    $push: {
      appliedUsers: {
        userId,
        dateApplied: Date.now(),
      },
    },
  });

  // Add the job to the user's appliedJobs array
  await User.findByIdAndUpdate(userId, {
    $push: {
      appliedJobs: {
        jobId,
        dateApplied: Date.now(),
      },
    },
    $set: { updatedAt: Date.now() },
  });

  res.status(200).json({
    status: "Success",
    message: "Job applied successfully",
  });
});

exports.getAllAppliedJobsByUser = catchAsync(async (req, res, next) => {
  const userId = req.user.id; // Assuming user ID is provided in the request parameters

  // Find the user by ID
  const user = await User.findById(userId);

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  // Populate the appliedJobs array of the user
  await user.populate({
    path: 'appliedJobs.jobId',
    populate: [
      {
        path: 'postedBy',
        select: 'name profileImgUrl',
      },
      {
        path: 'appliedUsers.userId',
        select: 'name email profileImgUrl',
      }
    ]
  });

  // Extract the applied jobs from the populated user object
  const appliedJobs = user.appliedJobs.map(job => job.jobId);

  res.status(200).json({
    status: "Success",
    appliedJobs
  });
});
