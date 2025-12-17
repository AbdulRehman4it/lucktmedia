
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse form data if needed

// Email Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'treeconnectsarl@gmail.com',
    pass: 'badt nrpr rced uyed', // App Password from send_mail.php
  },
});

// Route to send email
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message, permission } = req.body;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] Received request from ${email}`);

  const mailOptions = {
    from: `"Lucky Media Contact" <treeconnectsarl@gmail.com>`, // Authenticated sender
    replyTo: email, // User's email
    to: 'hi@luckymedia.marketing', 
    subject: subject || `New Contact Form Submission from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Permission:</strong> ${permission}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[${timestamp}] Email sent successfully to ${mailOptions.to}`);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error(`[${timestamp}] Error sending email:`, error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
