"use strict";

// npm packages

const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

const passport = require("passport");
const configDB = require("./config/database.js");
const session = require("express-session");
const flash = require("connect-flash");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Init app
const app = express();

// MongoDB connect

mongoose.connect(configDB.url); // connect to our database

require("./config/passport")(passport);
app.use(morgan("dev")); // log every request to the console

app.use(cookieParser());

// Pug js

app.use(
  session({
    secret: "ilovescotchscotchyscotchscotch", // session secret
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require("./app/routes.js")(app, passport); // load our routes and pass in our app and fully configured passport

app.listen(port);
