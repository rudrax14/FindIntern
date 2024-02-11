const Job = require("../models/Job");
const catchAsync = require("../utils/catchAsync");
const AppError = require('../utils/AppError');
const Company = require('../models/Company')


const filterJobObject = (jobObj,attrs)=>{

const filteredObj =  Object.keys(jobObj) 
                         .filter(attr => !(attrs.includes(attr)))
                         .reduce((obj,key)=>{
                             obj[key] = jobObj[key];
                            
                                                                    
                             return obj;
                         },{});
     return filteredObj;
}


// Get All Jobs
exports.getAllJobs = catchAsync(async (req, res) => {
 
    // Fetch all jobs
    const jobs = await Job.find();

    res.status(200).json({
      status: 'Success',
      jobs
    });

});

// Example usage in a route
// router.get('/jobs', getAllJobs);


// Get Single Job by ID
exports.getSingleJob = catchAsync(async (req, res,next) => {
 
    const jobId = req.params.jobId; // Replace with the actual job ID

    // Fetch the job by ID
    const job = await Job.findById(jobId);

    if (!job) {
      next(new AppError('Job not found',404));
    }

    res.status(200).json({
      status: 'Success',
      job
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
    jobs: jobId
  },
  $set: {
    updatedAt: Date.now()
  }
};



  await Company.updateOne(query, update);


    res.status(200).json({
      status: "Success",
      message: "A new job has been posted",
      newJob
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
      next(new AppError("You don't have permission to update this job",401));
    }

    

    // Update the job
    const updatedJobResult = await Job.findByIdAndUpdate(jobId, jobObj, { new: true });

    // Optionally, you can also update the Company's updatedAt field
    //const companyId = job.postedBy;
    //await Company.findByIdAndUpdate(companyId, { $set: { updatedAt: Date.now() } });

    res.status(200).json({
      status: 'Success',
      message: 'Job updated successfully',
      updatedJob: updatedJobResult
    });
 
};

// Example usage in a route
// router.put('/jobs/:jobId', updateJob);




// Delete Job by ID
exports.deleteJob = catchAsync( async (req, res) => {
  
    const jobId = req.params.jobId; // Replace with the actual job ID



    // Check if the user is the one who posted the job
    const job = await Job.findById(jobId);
    if (!job || job.postedBy.toString() !== req.user.id) {
      return next(new AppError("You don't have the permission to delete this job"));
    }

    // Delete the job
    await Job.findByIdAndDelete(jobId);

    // Remove the job ID from the associated company's jobs array
    const companyId = job.postedBy;
    await Company.findByIdAndUpdate(companyId, {
      $pull: { jobs: jobId },
      $set: { updatedAt: Date.now() }
    });

    res.status(200).json({
      status: 'Success',
      message: 'Job deleted successfully'
    });
  
});

// Example usage in a route
// router.delete('/jobs/:jobId', deleteJob);


