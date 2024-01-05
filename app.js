require('dotenv').config();
const express = require("express");
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const debug = require('debug');
const subscribeRouter = require('./subscribe'); // Import the subscribe router
const contactRouter = require('./contact') // Import the contact router
const appointmentRouter = require('./appointment') // Import the appointment router
const indexRouter = require('./routes/index');
const nodemailer = require('nodemailer');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Attach Express routers
app.use('/', indexRouter);
app.use('/subscribe', subscribeRouter);
app.use('/contact', contactRouter);
app.use('/appointment', appointmentRouter);


// Express custom middleware for catching all unmatched requests and formatting
// a 404 error to be sent as the response.
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
  });
  
  const serverErrorLogger = debug('backend:error');
  
  // Express custom error handler that will be called whenever a route handler or
  // middleware throws an error or invokes the `next` function with a truthy value
  app.use((err, req, res, next) => {
    serverErrorLogger(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
      message: err.message,
      statusCode,
      errors: err.errors
    })
  });
  
module.exports = app;
