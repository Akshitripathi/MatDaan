const User = require('../models/User');
const twilio = require('twilio');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JWT

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendOtp = async (mobile, otp) => {
    try {
        const message = await client.messages.create({
            body: `Your OTP code is ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: mobile
        });
        console.log(`OTP sent: ${message.sid}`);
    } catch (error) {
        console.error("Error sending OTP:", error.message);
    }
};

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

exports.signup = async (req, res) => {
    const { name, mobile, aadhar, username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const newUser = new User({
            name,
            mobile,
            aadhar,
            username,
            email,
            password,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.login = async (req, res) => {
    const { username, mobile, password } = req.body;

    try {
        const user = await User.findOne({ username, mobile });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const otp = generateOtp();
        user.otp = otp;
        user.otpExpiry = Date.now() + 10 * 60 * 1000; 
        await user.save();

        await sendOtp(mobile, otp);
        res.status(200).json({ message: "OTP sent" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.verifyOtp = async (req, res) => {
    const { username, otp } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.otp !== otp || user.otpExpiry < Date.now()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        // Generate JWT
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '3h' });

        res.status(200).json({ message: "OTP verified, login successful", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

