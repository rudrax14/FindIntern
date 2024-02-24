const { logout, verifyToken, login, register } = require('../controllers/authControllers');
const { companyProfile, updateCompanyProfile, getAllJobsPostedByCompany } = require('../controllers/companyControllers');
const { setAndVerifyRoles } = require('../controllers/middlewares/authMiddlewares');
const router = require('express').Router();
const { imageUpload } = require('../controllers/imageUploadController');



router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.route('/profile').get(verifyToken, companyProfile).patch(verifyToken, updateCompanyProfile);
router.route('/profile/image/upload').post(verifyToken, imageUpload);

router.route('/getAllPostedJobs').get(verifyToken, getAllJobsPostedByCompany);





module.exports = router;