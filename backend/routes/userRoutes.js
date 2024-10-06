const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const voterController = require('../controller/voterController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/verify-otp', userController.verifyOtp);
router.post('/submitVoterForm', voterController.submitVoterForm);

module.exports = router;
