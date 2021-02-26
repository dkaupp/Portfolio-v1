const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).send("Name , email and password are required.");

  const msg = {
    to: process.env.EMAIL2, // Change to your recipient
    from: process.env.EMAIL, // Change to your verified sender
    subject: `${name} <${email}>`,
    text: message,
    html: `<p>${message}<p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("success");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
