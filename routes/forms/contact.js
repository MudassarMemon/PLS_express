const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    let { name, email, phone, message } = req.body;
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
        to: 'dario@plsmechanical.com', // list of receivers
        subject: `PLS WEBSITE COMMUNICATION: Inquiry from ${name}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}` // plain text body
    };

    // let emailConfirmation = {
    //     from: process.env.EMAIL, // sender address
    //     to: email, // list of receivers
    //     subject: 'Thanks for reaching out.', // Subject line
    //     text: `We will be in touch shortly.` // plain text body
    // };

    try {
        let info = await transporter.sendMail(mailOptions);
        let confirm = await transporter.sendMail(emailConfirmation);
        console.log('Message sent: %s', info.messageId);
        // res.redirect('/success-page');
    } catch (error) {
        console.error(error);
        // res.redirect('/error-page');
    }
});

module.exports = router;
