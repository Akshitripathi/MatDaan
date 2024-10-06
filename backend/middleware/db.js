const mongoose = require('mongoose');
const Booth = require('../models/Booth');
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

const insertBoothData = async () => {
    try {
        const boothData = [
            { state: 'New York', city: 'New York City', boothCount: 4 },
            { state: 'California', city: 'Los Angeles', boothCount: 6 },
            { state: 'Texas', city: 'Houston', boothCount: 3 },
            { state: 'Illinois', city: 'Chicago', boothCount: 5 },
            { state: 'Florida', city: 'Miami', boothCount: 2 }
        ];

        // Check if booth data already exists (to prevent duplicates)
        const existingData = await Booth.find();
        if (existingData.length === 0) {
            // If no booth data exists, insert it
            await Booth.insertMany(boothData);
            console.log('Booth data inserted successfully');
        } else {
            console.log('Booth data already exists, skipping insertion');
        }
    } catch (err) {
        console.log('Error inserting booth data:', err);
    }
};

module.exports = connectDB;
