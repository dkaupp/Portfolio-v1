const next = require("next");
const express = require("express");
const sendMail = require("./utils/mailer.js");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";

const port = process.env.PORT || 3000;

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL2,
      subject: `Message from ${name} + ${email}`,
      text: message,
    };
    try {
      await sendMail(mailOptions);
      res.send("success");
    } catch (error) {
      console.log(error);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`Listening on ${port}....`);
  });
});
