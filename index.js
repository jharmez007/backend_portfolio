const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");


const app = express();


const PORT = 5100;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const contactRouter = require("./routes/contact.routes.js");
const wakeRouter = require("./routes/wake.routes.js");

app.use("/api/contact", contactRouter);
app.use("/api/wake", wakeRouter);

app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});
