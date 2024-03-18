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
        to: 'dario@plsmechanical.com', // list of receivers
        subject: `PLS WEBSITE COMMUNICATION: Appointment Request from ${fname} ${lname}`, // Subject line
        text: `Name: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nCity/Town: ${city}\nPostal Code: ${mobilePostal + postal}\nService Needed: ${service}\nDetails: ${details}\nFree Assessment: ${freeAssessment ? 'Yes' : 'No'}\nSMS Opt-In: ${enableSms ? 'Yes' : 'No'}\nReference: ${reference}` 
    };

    // let emailConfirmation = {
    //     from: process.env.EMAIL, // sender address
    //     to: email, // list of receivers
    //     subject: 'Appointment request recieved.', // Subject line
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
