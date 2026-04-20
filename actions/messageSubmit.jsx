
'use server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function messageSubmit(messageData) {
  const name = messageData.name.toString().trim();
  const email = messageData.email.toString().trim();
  const message = messageData.message.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in all fields!" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please provide a valid email address." };
  }

  try {

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: "📩 New Message Received on Portfolio",
      html: `
    <div style="
      font-family: Arial, sans-serif;
      border: 2px solid #4f46e5;
      border-radius: 12px;
      padding: 20px;
      background-color: #f3f4f6;
      color: #111827;
      max-width: 600px;
    ">
      <h2 style="color: #4f46e5;">📩 New Message Received!</h2>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Message:</strong></p>
      <div style="
        background-color: #e0e7ff;
        border-left: 4px solid #4f46e5;
        padding: 10px 15px;
        border-radius: 6px;
        white-space: pre-wrap;
      ">
        ${message}
      </div>
    </div>
  `,
    });

    return { success: true, message: "Message submitted!" };

  } catch (error) {
    console.error("Error saving message:", error);
    return { success: false, message: "Something went wrong!" };
  }
}