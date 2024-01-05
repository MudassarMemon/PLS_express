const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
    let { fname, lname, email, phone, city, postal, mobilePostal, service, freeAssessment, details, enableSms, reference } = req.body;

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
        subject: 'Appointment Request', // Subject line
        text: `Name: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nCity/Town: ${city}\nPostal Code: ${mobilePostal + postal}\nService Needed: ${service}\nDetails: ${details}\nFree Assessment: ${freeAssessment ? 'Yes' : 'No'}\nSMS Opt-In: ${enableSms ? 'Yes' : 'No'}\nReference: ${reference}` 
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        // res.redirect('/success-page');
    } catch (error) {
        console.error(error);
        // res.redirect('/error-page');
    }
});

module.exports = router;
