const express = require('express');
const { addMultipleBooths } = require('../controller/boothController');
const router = express.Router();

router.post('/addBooths', addMultipleBooths);

module.exports = router;
