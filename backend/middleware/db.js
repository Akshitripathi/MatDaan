const mongoose = require('mongoose');
const url="mongodb+srv://akshi_tripathi:edX32AfB2olzUSSs@cluster0.4i0xhor.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0";

// Function to connect to the database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
