const mongoose = require('mongoose');

// Define the schema for Booths
const BoothSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  boothCount: {
    type: Number,
    required: true  // Number of booths for the city
  }
});

// Export the model
module.exports = mongoose.model('Booth', BoothSchema);
