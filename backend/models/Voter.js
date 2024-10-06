const mongoose = require('mongoose');

// Define the schema for Voter
const VoterSchema = new mongoose.Schema({
  voterId: {
    type: String,
    required: true,
    unique: true  // Ensures that each voterId is unique
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Others'],
      required: true 
  },
  }
});

// Export the model
module.exports = mongoose.model('Voter', VoterSchema);
