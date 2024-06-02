const AppError = require("../../utils/AppError");
const User = require("../../models/User");
const Company = require("../../models/Company");
const Admin = require("../../models/Admin");
exports.setAndVerifyRoles = (...roles)=>{
    return (req,res,next)=>{
      //  console.log(roles.includes(req.user.role))
        if (roles.includes(req.user.role)) {
            // User is allowed to access the route
            if(req.user.role === "recruiter"){
                req.body.Model = Company;
            }else if(req.user.role === "jobseeker"){
                req.body.Model = User;
            }else{
                req.body.Model = Admin;
            }
            next();
        } else {
            // User is not allowed, return an error
            next(new AppError('You are not allowed to access this route', 401));
        }
    }
}

