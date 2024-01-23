const Company = require('../models/Company');
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
        companyProfile
    })
});

exports.updateCompanyProfile = catchAsync(async (req,res,next)=>{
    const companyObj = filterCompanyObject(req.body,["password","name","email"])
    await Company.findByIdAndUpdate(req.user.id,companyObj);
    res.status(200).json({
        status:'Success',
        message:"Company profile successfully update"
    })
});

