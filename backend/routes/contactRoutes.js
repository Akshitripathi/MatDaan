const express = require('express');
const router = express.Router();
const { sendContactForm } = require('../controller/contactController'); // Adjust path as needed

// Define the route to handle contact form submissions
router.post('/contact', sendContactForm);

module.exports = router;
