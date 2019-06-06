const Contact = require("../../models/contact");
const transporter = require("../../config/mail").transporter;
const contactEmail = require("../../config/mail").contactEmail;

module.exports = {
  submitContact: async (req, res, next) => {
    console.log(req.body);
    await Contact.create(req.body);
    const response = contactEmail(req.body);
    transporter.sendMail({
      from: '"Peter Keller" <flatiron@ecommerce.com>', // sender address
      to: "keller.f.peter@gmail.com", // list of receivers
      subject: "Order complete", // Subject line
      text: "Hello world?", // plain text body
      html: response // html body
    });
    res.send("ok");
  }
};
