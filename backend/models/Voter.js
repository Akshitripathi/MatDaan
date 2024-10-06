const mongoose = require('mongoose');

// Define the schema for Voter
const VoterSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        required: true,
        ref: 'User' // Ensure it references the User model
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
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        required: true
    }
});

// Export the model
module.exports = mongoose.model('Voter', VoterSchema);
