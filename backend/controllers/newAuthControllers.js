exports.register = catchAsync(async (req,res,next)=>{
    const { username,email, password, name,role } = req.body;
    let Model = "";
  // Validate that all required fields are provided
  if (!username || !name || !email || !password ) {
    return next(new AppError('Fill every field'));
  }
  if(role === "user"){
    Model = "User";
  }else if(role === "company"){
    Model = "Company";
  }else if(role === "admin"){
    Model = "Admin"
  }
  // Create a new user
  const newRegister = await Model.create({
    username,
    email,
    password,
    name,
  });
  
  // Create a JWT token for the new company
  const payload = {
    email: newRegister.email,
    id: newRegister._id,
    name: newRegister.name,
    role
  };
  const token = await signToken(payload);
  
  // Send response with the new company and JWT token
  res.status(200).json({
    message: `A new ${req.body.role}  just registered`,
    [`${role}`]:newRegister,
    token
  });
});


exports.login = catchAsync(async (req, res, next) => {
    const { email, password,role } = req.body;
    let Model = "";
    // Validate that email and password are provided
    if (!email || !password) {
      return next(new AppError('Cannot leave email or password field blank'));
    }
    if(role === "user"){
        Model = "User";
      }else if(role === "company"){
        Model = "Company";
      }else if(role === "admin"){
        Model = "Admin"
      }
    // Find the document with the provided email
    const document = await Model.findOne({ email });
  
    // Validate that the document exists
    if (!document) {
      return next(new AppError(`${Model} not found`));
    }
  
    // Validate the provided password against the stored hashed password
    const isPasswordValid = await verifyPassword(password, document.password);
  
    // If password is not valid, send an error response
    if (!isPasswordValid) {
      return next(new AppError('Enter the correct password'));
    }
  
    // Create a JWT token for the logged-in user
    const payload = { email: document.email, id: document._id, name:document.fullName,role:role };
    const token = await signToken(payload);
  
    // Send response with success message, user information, and JWT token
    res.status(201).json({
      status: 'SUCCESS',
      message: "Login successful",
      [`${role}`]:document,
      token
    });
  });
  