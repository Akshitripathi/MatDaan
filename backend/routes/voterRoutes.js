const express = require('express');
const router = express.Router();
const { submitVoterForm } = require('../controller/voterController'); // Adjust the path accordingly

// Define the route to handle voter form submissions
router.post('/voter', submitVoterForm);

module.exports = router;
