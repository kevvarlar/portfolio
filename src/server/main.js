import express from 'express' ;
import sendEmail from './sendEmail.js';
import ViteExpress from 'vite-express';
import 'dotenv/config';
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.post('/api/email', (req, res) => {
  const { name, email, message } = req.body;
  const subject = `Message from ${name}`;
  const text = `You have received a new message from ${name} (${email}):\n\n${message}`;

  sendEmail(subject, text)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error sending email');
    })
});

ViteExpress.listen(app, process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

export default app;