require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// const sendMail = (mailOptions) => {
//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) return reject(err);

//       return resolve(info);
//     });
//   });
// };
const sendMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err);

    return console.log(info);
  });
};

module.exports = sendMail;
