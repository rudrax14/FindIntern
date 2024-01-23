const { companyRegister, companyLogin, logout, verifyToken } = require('../controllers/authControllers');
const { companyProfile, updateCompanyProfile } = require('../controllers/companyControllers');
const { setAndVerifyRoles } = require('../controllers/middlewares/authMiddlewares');
const router = require('express').Router();



router.post('/register',companyRegister);
router.post('/login',companyLogin);
router.post('/logout',logout);

router.route('/companyProfile').get(verifyToken,setAndVerifyRoles("company"),companyProfile).patch(updateCompanyProfile);





module.exports = router;