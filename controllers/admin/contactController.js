const Contact = require("../../models/contact");

module.exports = {
  getContacts: async (req, res, next) => {
    Contact.find({})
      .then(contacts => res.json(contacts))
      .catch(err => console.log(err));
  },

  deleteContact: async (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id)
      .then(contact => res.sendStatus(200))
      .catch(err => console.log(err));
  }
};
