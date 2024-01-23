const AppError = require("../../utils/AppError");

exports.setAndVerifyRoles = (...roles)=>{
    return (req,res,next)=>{
      //  console.log(roles.includes(req.user.role))
        if (roles.includes(req.user.role)) {
            // User is allowed to access the route
            next();
        } else {
            // User is not allowed, return an error
            next(new AppError('You are not allowed to access this route', 401));
        }
    }
}

