require("dotenv").config();
import sendMail from "../../utils/mailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL2,
    subject: `Message from ${name} + ${email}`,
    text: message,
  };
  try {
    sendMail(mailOptions);
    res.send("success");
  } catch (error) {
    console.log(error);
  }
};
