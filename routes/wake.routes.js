const {
    wakeServer,
  } = require("../controllers/wake.controllers.js");
  
  const router = require("express").Router();
  
  router.post("/", wakeServer);
  
  module.exports = router; 