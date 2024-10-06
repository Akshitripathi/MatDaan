const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const voterController = require('../controller/voterController');
const jwt = require('jsonwebtoken'); // Import JWT

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header
    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Attach user info to request
        next();
    });
};

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/verify-otp', userController.verifyOtp);

// Protect this route with JWT authentication
router.post('/submitVoterForm', authenticateToken, voterController.submitVoterForm);

module.exports = router;
