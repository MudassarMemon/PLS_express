const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    let { firstName, lastName, email } = req.body;
    // Set up Nodemailer transport
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or your email service
        auth: {
            user: process.env.EMAIL, // Use environment variables for security
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL, // sender address
        to: 'mudassar95memon@gmail.com', // list of receivers
        subject: 'New Subscription', // Subject line
        text: `New subscriber: ${firstName} ${lastName}, Email: ${email}` // plain text body
    };

    // try {
    //     let info = await transporter.sendMail(mailOptions);
    //     console.log('Message sent: %s', info.messageId);
    //     res.redirect('/success-page');
    // } catch (error) {
    //     console.error(error);
    //     res.redirect('/error-page');
    // }
});

module.exports = router;
