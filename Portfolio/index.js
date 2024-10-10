import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 25,

  auth: {
    user: "06118aebe9210c",
    pass: "16bd32d02744b1", // Use the App Password if 2FA is enabled
  },
});

// Email options
const mailOptions = {
  from: "pawadeyojan487@gmail.com", // Sender address
  to: "pawadeyojan487@gmail.com", // List of recipients
  subject: "Hello from Nodemailer", // Subject line
  text: "Hello, this is a test email sent using Nodemailer!", // Plain text body
  html: "<p>This is hello from hasbdvasvd@gmail.com </p>",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log("Email sent: " + info.response);
});
