const Company = require("../models/Company");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const filterCompanyObject = (userObj, attrs) => {
  const filteredObj = Object.keys(userObj)
    .filter((attr) => !attrs.includes(attr))
    .reduce((obj, key) => {
      obj[key] = userObj[key];
      return obj;
    }, {});
  return filteredObj;
};

exports.companyProfile = catchAsync(async (req, res, next) => {
  const companyProfile = await Company.findById(req.user.id);
  // const CompanyProfile = {
  //     Companyname:CompanyDetails.Companyname,
  //     email:CompanyDetails.email,
  //     fullName:CompanyDetails.fullName,
  //     location:CompanyDetails.location&&CompanyDetails.location!==""?CompanyDetails.location:
  // }
  res.status(200).json({
    status: "Success",
    profile: companyProfile,
  });
});

exports.updateCompanyProfile = catchAsync(async (req, res, next) => {
  const companyObj = filterCompanyObject(req.body, [
    "password",
    "fullName",
    "username",
    "email",
  ]);
  const query = {
    $set: {
      updatedAt: Date.now(),
      ...companyObj,
    },
  };

  await Company.findByIdAndUpdate(req.user.id, query);
  res.status(200).json({
    status: "Success",
    message: "Company profile successfully updated",
  });
});

exports.getAllJobsPostedByCompany = catchAsync(async (req, res, next) => {
  const companyId = req.user.id;

  // Find the company by ID and populate the jobs array
  const company = await Company.findById(companyId).populate({
    path: "jobs",
    populate: [
      {
        path: "appliedUsers.userId",
        select: "name profileImgUrl location",
      },
      {
        path: "postedBy",
        select: "profileImgUrl",
      },
    ],
  });

  if (!company) {
    return next(new AppError("Company not found", 404));
  }

  // Extract the jobs from the populated company object
  const jobsPostedByCompany = company.jobs;

  res.status(200).json({
    status: "Success",
    jobs: jobsPostedByCompany,
  });
});
