     const router = require('express').Router();
const { verifyToken } = require('../controllers/authControllers');
const { createJob, updateJob, deleteJob, getAllJobs, getSingleJob } = require('../controllers/jobControllers');
const { setAndVerifyRoles } = require('../controllers/middlewares/authMiddlewares');
    

     
     
     router.route('/').get(verifyToken,getAllJobs).post(verifyToken,setAndVerifyRoles('company'),createJob);
     
     router.route('/:jobId').get(verifyToken,getSingleJob).patch(verifyToken,setAndVerifyRoles('company'),updateJob).delete(verifyToken,setAndVerifyRoles('company'),deleteJob);

     
     

     module.exports =  router;

     







// /company/:companyId/job
// /company/:companyId/job
// /company/:companyId/job