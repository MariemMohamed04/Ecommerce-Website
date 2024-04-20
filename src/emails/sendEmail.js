import nodemailer from "nodemailer";

export const sendEmail = async() => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });
}