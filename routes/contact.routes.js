const { createContact } = require("../controllers/contact.controllers.js");
  
  const router = require("express").Router();
  
  router.post("/", createContact);

  
  module.exports = router;
  