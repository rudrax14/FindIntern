const { logout, verifyToken, login, register, resetPassword, resetPasswordToken } = require('../controllers/authControllers');

const router = require('express').Router();



router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);

router.post('/resetPassword',resetPassword)
router.post('/resetPasswordToken',resetPasswordToken)


module.exports = router;