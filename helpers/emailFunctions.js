const { newContactTemplate } = require("./contactTemplate");
const { adminNotificationTemplate } = require("./adminTemplate");

exports.sendNewAdminContactEmail = (contact) => {
  if (contact) {
    const from = `Nnamdi.dev <${process.env.MAIL_ID}>`;
    const to = process.env.MAIL_ID;
    const subject = "📩 New Contact Submission";
    const html = adminNotificationTemplate(contact);

    return { from, to, subject, html };
  }
};

exports.sendNewContactEmail = (contact) => {
  if (contact) {
    const from = `Nnamdi.dev <${process.env.MAIL_ID}>`;
    const to = contact?.email;
    const subject = "✅ Hello there";
    const html = newContactTemplate(contact);

    return { from, to, subject, html };
  }
};

