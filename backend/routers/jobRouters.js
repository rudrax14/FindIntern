     const router = require('express').Router({mergeParams: true});
const { verifyToken } = require('../controllers/authControllers');
const { createJob, updateJob, deleteJob, getAllJobs, getSingleJob } = require('../controllers/jobControllers');
const { setAndVerifyRoles } = require('../controllers/middlewares/authMiddlewares');
    

     
     
     router.route('/job').get(verifyToken,getAllJobs).post(verifyToken,setAndVerifyRoles('company'),createJob);
     
     router.route('/job/:jobId').get(verifyToken,getSingleJob).patch(verifyToken,setAndVerifyRoles('company'),updateJob).delete(verifyToken,setAndVerifyRoles('company'),deleteJob);

     
     

     module.exports =  router;

     







// /company/:companyId/job
// /company/:companyId/job
// /company/:companyId/job