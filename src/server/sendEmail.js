import nodemailer from 'nodemailer';
import 'dotenv/config';
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});
const sendEmail = (subject, text) => {
  const mailOptions = {from: email, to: email, subject, text};
  return transporter.sendMail(mailOptions)
}

export default sendEmail;
