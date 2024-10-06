const Voter = require('../models/Voter');
const Booth = require('../models/Booth');

// Handle voter form submission
exports.submitVoterForm = async (req, res) => {
  const { voterId, state, city, pincode } = req.body;

  try {
    // Save voter details
    const newVoter = new Voter({
      voterId,
      state,
      city,
      pincode
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
    }

    console.error(error);
    res.status(500).json({ message: 'Error submitting voter form', error: error.message });
  }
};
