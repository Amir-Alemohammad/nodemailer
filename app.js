const nodemailer = require('nodemailer');

require("dotenv").config();


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amirho3inalemohammad@gmail.com',
    pass: process.env.PASS,
  }
});

const mailOptions = {
  from: 'amirho3inalemohammad@gmail.com',
  to: 'amirhosseinapple87@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});