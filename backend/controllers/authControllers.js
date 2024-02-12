const signToken = require('../utils/signToken');
const verifyPassword = require('../utils/verifyPassword');
const User = require('../models/User');
const Company = require('../models/Company');
const Admin = require('../models/Admin');

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





exports.register = catchAsync(async (req, res, next) => {
  const { username, email, password, name, role } = req.body;
  let Model = "";
  // Validate that all required fields are provided
  if (!username || !name || !email || !password) {
    return next(new AppError('Fill every field', 404));
  }
  if (!role) {
    return next(new AppError('Provide a role', 404))
  }
  if (role === "user") {
    Model = User;
  } else if (role === "company") {
    Model = Company;
  } else if (role === "admin") {
    Model = Admin
  }
  // Create a new user
  const newRegister = await Company.create({
    username,
    email,
    password,
    name,
    role,
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
    message: `A new ${role}  just registered`,
    [`${role}`]: newRegister,
    token
  });
});


exports.login = catchAsync(async (req, res, next) => {
  const { email, password, role } = req.body;
  let Model = "";
  // Validate that email and password are provided
  if (!email || !password) {
    return next(new AppError('Cannot leave email or password field blank'));
  }
  if (!role) {
    return next(new AppError('Provide a role', 404));
  }
  if (role === "jobseeker") {
    Model = User;
  } else if (role === "recruiter") {
    Model = Company;
  } else if (role === "admin") {
    Model = Admin;
  }
  console.log("model=", Model);
  // Find the document with the provided email
  const document = await Model.findOne({ email });

  // Validate that the document exists
  if (!document) {
    return next(new AppError(`${role} not found`, 404));
  }

  // Validate the provided password against the stored hashed password
  const isPasswordValid = await verifyPassword(password, document.password);

  // If password is not valid, send an error response
  if (!isPasswordValid) {
    return next(new AppError('Enter the correct password'));
  }

  // Create a JWT token for the logged-in user
  const payload = { email: document.email, id: document._id, name: document.fullName, role: role };
  const token = await signToken(payload);

  // Send response with success message, user information, and JWT token
  res.status(201).json({
    status: 'SUCCESS',
    message: "Login successful",
    [`${role}`]: document,
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