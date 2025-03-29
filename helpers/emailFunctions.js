const { newContactTemplate } = require("./contactTemplate");


exports.sendNewContactEmail = (contact) => {
  if (contact) {
    const from = `Nnamdi.dev <${process.env.MAIL_ID}>`;
    const to = contact?.email;
    const subject = "✅ Hello There";
    const html = newContactTemplate(contact);

    return { from, to, subject, html };
  }
};
