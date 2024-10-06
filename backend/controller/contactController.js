const nodemailer = require('nodemailer');

// Email sending controller for the contact form
exports.sendContactForm = async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Create transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use any other service like Outlook, Yahoo, etc.
        auth: {
            user: process.env.CONTACT_EMAIL, // Your email address (team's email)
            pass: process.env.CONTACT_EMAIL_PASSWORD // Your email password
        }
    });

    // Mail options for sending to the team (your email)
    const teamMailOptions = {
        from: process.env.CONTACT_EMAIL, // Your email (as the sender)
        to: process.env.CONTACT_EMAIL, // Your email (as the recipient)
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Mail options for sending a copy to the user
    const userMailOptions = {
        from: process.env.CONTACT_EMAIL, // Your email (as the sender)
        to: email, // User's email (the person who filled the form)
        subject: 'Thank you for contacting us!',
        text: `Hello ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nHere is a copy of your message:\n\n${message}\n\nBest regards,\nYour Team`
    };

    try {
        // Send email to the team
        await transporter.sendMail(teamMailOptions);

        // Send a copy of the message to the user
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send emails' });
    }
};
