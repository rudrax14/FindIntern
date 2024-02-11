const Company = require('../models/Company');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');


const filterCompanyObject = (userObj,attrs)=>{
    
    const filteredObj =  Object.keys(userObj)
                         .filter(attr => !(attrs.includes(attr)))
                         .reduce((obj,key)=>{
                             obj[key] = userObj[key];
                             return obj;
                         },{});
     return filteredObj;
}              






exports.companyProfile = catchAsync(async (req,res,next)=>{
    const companyProfile = await Company.findById(req.user.id);
    // const CompanyProfile = {
    //     Companyname:CompanyDetails.Companyname,
    //     email:CompanyDetails.email,
    //     fullName:CompanyDetails.fullName,
    //     location:CompanyDetails.location&&CompanyDetails.location!==""?CompanyDetails.location:
    // }
    res.status(200).json({
        status:'Success',
        profile:companyProfile
    })
});

exports.updateCompanyProfile = catchAsync(async (req,res,next)=>{
    const companyObj = filterCompanyObject(req.body,["password"])
    await Company.findByIdAndUpdate(req.user.id,companyObj);
    res.status(200).json({
        status:'Success',
        message:"Company profile successfully update"
    })
});

exports.getAllJobsPostedByCompany = catchAsync( async (req, res,next) => {
    const companyId = req.user.id; 
  
   
      // Find the company by ID
      const company = await Company.findById(companyId);
  
      if (!company) {
        next(new AppError('Company not found',404));
      }
  
      // Populate the jobs array of the company
      await company.populate('jobs');
  
      // Extract the jobs from the populated company object
      const jobsPostedByCompany = company.jobs;
  
      res.status(200).json({
        status: 'Success',
        jobs: jobsPostedByCompany,
      });
   
} );
  