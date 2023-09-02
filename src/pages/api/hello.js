// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import transporter, { mailOptions } from "@/config/nodemailer";

// import { transporter } from "../../config/nodemailer"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.message,

        text: "This is text string",
        html: `<h1>Portfolio Message</h1><table><tr>
          <th>Email</th><th>Message</th><th>Name</th></tr>
          <tr>
          <td>${data.email}</td><td>${data.message}</td><td>${data.name}</td>
          </tr>
        </table>`,
      });
      return res.status(200).send({ message: "sent mail successfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
}
