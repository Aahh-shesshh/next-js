import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
};
export default transporter;
