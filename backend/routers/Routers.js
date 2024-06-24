const { profile } = require('../controllers/controllers');

const router = require('express').Router();


router.get('/profile/:id',profile)

module.exports = router;