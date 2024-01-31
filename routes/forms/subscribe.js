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
        subject: `Subscription Request from ${firstName} ${lastName}`, // Subject line
        text: `New subscriber: ${firstName} ${lastName}\nEmail: ${email}` // plain text body
    };

    // let emailConfirmation = {
    //     from: process.env.EMAIL, // sender address
    //     to: email, // list of receivers
    //     subject: 'Welcome to our newsletter', // Subject line
    //     text: `You have successfully enrolled to our newsletter` // plain text body
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
