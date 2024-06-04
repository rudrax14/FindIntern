const router = require('express').Router();
const { verifyToken } = require('../controllers/authControllers');
const { createJob, updateJob, deleteJob, getAllJobs, getSingleJob } = require('../controllers/jobControllers');
const { setAndVerifyRoles } = require('../controllers/middlewares/authMiddlewares');




router.route('/').get(getAllJobs).post(verifyToken, createJob);

router.route('/:jobId').get(verifyToken,setAndVerifyRoles('recruiter','jobseeker'),getSingleJob).patch(verifyToken, setAndVerifyRoles('recruiter'), updateJob).delete(verifyToken, setAndVerifyRoles('recruiter'), deleteJob);




module.exports = router;









// /company/:companyId/job
// /company/:companyId/job
// /company/:companyId/job