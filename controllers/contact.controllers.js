const nodemailer = require("../mail_service/index");
const { sendNewContactEmail, sendNewAdminContactEmail } = require("../helpers/emailFunctions");
const Contact = require("../models/contact.models");

const createContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);

    const emailData = sendNewContactEmail(newContact);
    const adminData = sendNewAdminContactEmail(newContact);

    if (!emailData || !adminData) {
      return res.status(400).json({ success: false, message: "Email data is missing" });
    }

    // Send emails separately if nodemailer.send() doesn't support multiple
    await nodemailer.send(emailData);
    await nodemailer.send(adminData);

    res.status(201).json({ success: true, message: "Contact created" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createContact,
};
