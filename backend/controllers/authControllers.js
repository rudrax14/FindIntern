const signToken = require('../utils/signToken');
const verifyPassword = require('../utils/verifyPassword');
const User = require('../models/User');
const Company = require('../models/Company');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const runRedisServer = require('../redisConn');

const { promisify } = require('util');
const jwt = require('jsonwebtoken');

// Function to extract the Bearer token from the request headers
function extractBearerToken(req) {
  const authHeader = req.headers.authorization;
  return authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
}

// Function to add a token to the Redis blacklist
async function addToBlacklist(redisClient, token) {
  await redisClient.set(token, `bl_${token}`);
}

// Register a new user
exports.userRegister = catchAsync(async (req, res, next) => {
  const { username, email, password, fullName } = req.body;

  // Validate that all required fields are provided
  if (!username || !email || !password || !fullName) {
    return next(new AppError('Fill every field'));
  }

  // Create a new user
  const newUser = await User.create({
    username,
    email,
    password,
    fullName,
  });

  // Create a JWT token for the new user
  const payload = {
    email: newUser.email,
    id: newUser._id,
    name: newUser.fullName,
    role: "user"
  };


  const token = await signToken(payload);

  // Send response with the new user and JWT token
  res.status(200).json({
    message: "A new user just registered",
    newUser,
    token
  });
});



// Register a company
exports.companyRegister = catchAsync(async (req,res,next)=>{
    const { email, password, name } = req.body;

  // Validate that all required fields are provided
  if (!name || !email || !password ) {
    return next(new AppError('Fill every field'));
  }

  // Create a new user
  const newCompany = await Company.create({
    
    email,
    password,
    name,
  });

  // Create a JWT token for the new company
  const payload = {
    email: newCompany.email,
    id: newCompany._id,
    name: newCompany.name,
    role: "company"
  };
  const token = await signToken(payload);

  // Send response with the new company and JWT token
  res.status(200).json({
    message: "A new company just registered",
    newCompany,
    token
  });
})

// Login a user
exports.userLogin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate that email and password are provided
  if (!email || !password) {
    return next(new AppError('Cannot leave email or password field blank'));
  }

  // Find the user with the provided email
  const user = await User.findOne({ email });

  // Validate that the user exists
  if (!user) {
    return next(new AppError('User not found'));
  }

  // Validate the provided password against the stored hashed password
  const isPasswordValid = await verifyPassword(password, user.password);

  // If password is not valid, send an error response
  if (!isPasswordValid) {
    return next(new AppError('Enter the correct password'));
  }

  // Create a JWT token for the logged-in user
  const payload = { email: user.email, id: user._id, name:user.fullName,role:"user" };
  const token = await signToken(payload);

  // Send response with success message, user information, and JWT token
  res.status(201).json({
    status: 'SUCCESS',
    message: "Login successful",
    user,
    token
  });
});


// Login a company
exports.companyLogin = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    // Validate that email and password are provided
    if (!email || !password) {
      return next(new AppError('Cannot leave email or password field blank'));
    }
  
    // Find the user with the provided email
    const company = await Company.findOne({ email });
  
    // Validate that the company exists
    if (!company) {
      return next(new AppError('Company not found'));
    }
  
    // Validate the provided password against the stored hashed password
    const isPasswordValid = await verifyPassword(password, company.password);
  
    // If password is not valid, send an error response
    if (!isPasswordValid) {
      return next(new AppError('Enter the correct password'));
    }
  
    // Create a JWT token for the logged-in company
    const payload = { email: company.email, id: company._id, name:company.name,role:"company" };
    const token = await signToken(payload);
  
    // Send response with success message, user information, and JWT token
    res.status(201).json({
      status: 'SUCCESS',
      message: "Login successful",
      company,
      token
    });
  });

// Verify the JWT token and check if it is in the Redis blacklist
exports.verifyToken = catchAsync(async (req, res, next) => {
  // Connect to Redis server
  let redisClient = await runRedisServer();
  await redisClient.connect();

  // Extract Bearer token from the request
  const token = extractBearerToken(req);

  // If no token is provided, send an error response
  if (!token) {
    return next(new AppError('You are not logged in to gain access'));
  }

  // Verify JWT token using the secret key
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if token is in Redis blacklist
  const find = await redisClient.get(token);

  // If token is in the blacklist, send an error response
  if (find) {
    return next(new AppError("Token invalid"));
  }

  // Attach decoded user information to request object for further processing
  req.user = decoded;

  // Continue to the next middleware/controller
  next();
});

// Logout a user by adding the JWT token to the Redis blacklist
exports.logout = catchAsync(async (req, res, next) => {
  // Connect to Redis server
  let redisClient = await runRedisServer();
  await redisClient.connect();

  // Extract Bearer token from the request
  const token = extractBearerToken(req);

  // If no token is provided, send an error response
  if (!token) {
    return next(new AppError('You are not logged in '));
  }

  // Add token to Redis blacklist
  await addToBlacklist(redisClient, token);

  // Send response with success message
  res.status(200).json({
    message: "Logged out successfully"
  });
});