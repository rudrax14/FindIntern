const { userRegister, userLogin, logout, verifyToken, register, login } = require('../controllers/authControllers');
const { userProfile, updateUserProfile, applyJob, getAllAppliedJobsByUser } = require('../controllers/userControllers');
const { imageUpload } = require('../controllers/imageUploadController');

const router = require('express').Router();

const jobRouters = require('../routers/jobRouters');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.route('/profile').get(verifyToken, userProfile).patch(verifyToken, updateUserProfile);
router.route('/profile/image/upload').post(verifyToken, imageUpload);
router.route('/apply/:jobId').patch(verifyToken, applyJob);
router.route('/getAllAppliedJobs').get(verifyToken, getAllAppliedJobsByUser);
//  /user/:id/company/:id/job/:id

module.exports = router;