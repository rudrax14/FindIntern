const { logout, verifyToken, login, register } = require('../controllers/authControllers');
const { companyProfile, updateCompanyProfile } = require('../controllers/companyControllers');
const { setAndVerifyRoles } = require('../controllers/middlewares/authMiddlewares');
const router = require('express').Router();



router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);

router.route('/companyProfile').get(verifyToken,setAndVerifyRoles("company"),companyProfile).patch(updateCompanyProfile);





module.exports = router;