const { approveJobRequest, denyAndDeleteJobRequest } = require('../controllers/adminControllers');
const { logout, verifyToken, login, register } = require('../controllers/authControllers');
const { setAndVerifyRoles } = require('../controllers/middlewares/authMiddlewares');
const { adminProfile } = require('../controllers/adminControllers');
const router = require('express').Router();



router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.patch('/approve/:jobId', approveJobRequest);
router.patch('/disapprove/:jobId', denyAndDeleteJobRequest);

router.route('/profile').get(verifyToken, setAndVerifyRoles("admin"), adminProfile)







module.exports = router;