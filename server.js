"use strict";

const express = require("express");
const port = process.env.PORT || 5000;
require("dotenv").config();

const configDB = require("./config/database.js");
const flash = require("connect-flash");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const bodyParser = require("body-parser");
app
  .use(bodyParser())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

app.use(cors());
app.use(morgan("dev"));
app.use(flash());

mongoose.connect(configDB.url);

require("./routes/admin/adminRoutes")(app);

app.listen(port);
