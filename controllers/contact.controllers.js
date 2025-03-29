const nodemailer = require("../mail_service/index");

const { sendNewContactEmail } = require("../helpers/emailFunctions");

const createContact = async (req, res) => {
  try {

    const emailData = sendNewContactEmail(newContact);
    await nodemailer.send(emailData);

    res
      .status(201)
      .json({ success: true, message: `Contact created`});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    await Contact.find();

    res.status(201).json({
      success: true,
      message: `Got all contacts`,
      data: "Just to wake server up lol",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
};
