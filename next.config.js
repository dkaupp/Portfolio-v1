require("dotenv").config();

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL: process.env.EMAIL,
    EMAIL2: process.env.EMAIL2,
  },
};
