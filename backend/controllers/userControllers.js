const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');
const Job = require('../models/Job')

const filterUserObject = (userObj,attrs)=>{
    
   const filteredObj =  Object.keys(userObj)
                        .filter(attr => !(attrs.includes(attr)))
                        .reduce((obj,key)=>{
                            obj[key] = userObj[key];
                            return obj;
                        },{});
    return filteredObj;
}               






exports.userProfile = catchAsync(async (req,res,next)=>{
    const userProfile = await User.findById(req.user.id);
    // const userProfile = {
    //     username:userDetails.username,
    //     email:userDetails.email,
    //     fullName:userDetails.fullName,
    //     location:userDetails.location&&userDetails.location!==""?userDetails.location:
    // }
    res.status(200).json({
        status:'Success',
        userProfile
    })
});

exports.updateUserProfile = catchAsync(async (req,res,next)=>{
    const userObj = filterUserObject(req.body,["password","fullName","username","email"])
    await User.findByIdAndUpdate(req.user.id,userObj);
    res.status(200).json({
        status:'Success',
        message:"User profile successfully update"
    })
});


exports.applyJob = catchAsync( async (req,res,next)=>{
  
    const jobId = req.params.jobId; // Replace with the actual job ID

    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return next(new AppError("Job not found",404));
    }

    // Assuming you have the authenticated user available in req.user
    const userId = req.user.id;

    // Check if the user has already applied for this job
    const alreadyApplied = await User.findOne({ _id: userId, 'appliedJobs.jobId': jobId });
    if (alreadyApplied) {
      return next(new AppError("You have already applied for this job",401));
    }

    // Add the job to the user's appliedJobs array
    await User.findByIdAndUpdate(userId, {
      $push: {
        appliedJobs: {
          jobId,
          dateApplied: Date.now()
        }
      },
      $set: { updatedAt: Date.now() }
    });

    res.status(200).json({
      status: 'Success',
      message: 'Job applied successfully'
    });
})


