const {
    createContact,
    getAllContacts,
  } = require("../controllers/contact.controllers.js");
  
  const router = require("express").Router();
  
  router.post("/", createContact);
  router.get("/", getAllContacts);
  
  module.exports = router;
  