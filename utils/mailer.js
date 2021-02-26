const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (name, email, message) => {
  const msg = {
    to: process.env.EMAIL2, // Change to your recipient
    from: process.env.EMAIL, // Change to your verified sender
    subject: `${name} <${email}>`,
    text: message,
    html: `<p>${message}<p>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = sendMail;
