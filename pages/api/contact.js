import sendMail from "../../utils/mailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendMail(name, email, message);
    res.status(200).send("success");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
