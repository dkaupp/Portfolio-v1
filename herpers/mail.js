import client from "./client";

export const sendContactMail = (data) => {
  return client.post("/", data);
};
