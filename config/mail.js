const nodemailer = require("nodemailer");

module.exports = {
  transporter: nodemailer.createTransport({
    host: process.env.EMAILHOST,
    port: 465, //25, 587	(for unencrypted/TLS connections) 465	(for SSL connections)
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAILUSER, // generated ethereal user
      pass: process.env.EMAILPASS
    }
  }),

  contactEmail: body => {
    return `
    <p>New contact submitted</p>
    <h3>Contact details</h3>
    <ul>
        <li>${body.name}</li>
        <li>${body.subject}</li>
        <li>${body.email}</li>
        <li>${body.message}</li>
    </ul>
    `;
  }
};
