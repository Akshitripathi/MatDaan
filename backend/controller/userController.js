const User = require('../models/User');
const twilio = require('twilio');
const bcrypt = require('bcrypt');

// Twilio setup
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const sendOtp = (mobile, otp) => {
    return client.messages.create({
        body: `Your OTP code is ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: mobile
    });
};

// Generate random OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// Signup controller
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

// Login controller (OTP sent after entering username and mobile)
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

        // Generate and send OTP
        const otp = generateOtp();
        user.otp = otp;
        user.otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
        await user.save();

        await sendOtp(mobile, otp);
        res.status(200).json({ message: "OTP sent" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// OTP verification
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

        // Clear OTP after verification
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        res.status(200).json({ message: "OTP verified, login successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
