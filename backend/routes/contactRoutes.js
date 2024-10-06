const express = require('express');
const { sendContactForm } = require('../controller/contactController');

const router = express.Router();

router.post('/', sendContactForm);

module.exports = router;
