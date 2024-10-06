const Booth = require('../models/Booth');

// Controller to add multiple booths
exports.addMultipleBooths = async (req, res) => {
    try {
        const booths = req.body;  // Expecting an array of booth data
        const addedBooths = await Booth.insertMany(booths);  // Insert multiple booths at once
        res.status(201).json({ message: 'Booths added successfully', addedBooths });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
