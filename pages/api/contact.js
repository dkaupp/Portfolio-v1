require("dotenv").config();
import sendMail from "../../utils/mailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  try {
    sendMail(name, email, message);
    await res.send("success");
  } catch (error) {
    console.log(error);
  }
};
