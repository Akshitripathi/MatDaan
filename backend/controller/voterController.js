const Voter = require('../models/Voter');
const Booth = require('../models/Booth');
const jwt = require('jsonwebtoken');

exports.submitVoterForm = async (req, res) => {
  const { state, city, pincode, age, gender } = req.body;

  try {
    // Verify the token and get the user ID
    const token = req.headers.authorization.split(" ")[1]; // Assuming Bearer token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Create a new voter using the userId from the token
    const newVoter = new Voter({
      userId: decoded.id, // Use user ID from the token
      state,
      city,
      pincode,
      age,
      gender
    });

    await newVoter.save();

    // Fetch the number of booths for the specified city
    const booth = await Booth.findOne({ state, city });

    if (!booth) {
      return res.status(404).json({ message: 'No booths found for this city.' });
    }

    // Send the booth information back (number of booths)
    res.status(200).json({
      message: 'Voter details saved successfully!',
      boothCount: booth.boothCount,
      boothInfo: booth
    });
  } catch (error) {
    if (error.code === 11000) {
      // MongoDB duplicate key error for unique fields
      return res.status(400).json({ message: 'Voter ID has already been used. Please use a different voter ID.' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token. Please log in again.' });
    } else if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired. Please log in again.' });
    }

    console.error(error);
    res.status(500).json({ message: 'Error submitting voter form', error: error.message });
  }
};
