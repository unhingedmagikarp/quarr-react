"use strict";

// npm packages

const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
require("dotenv").config();

const passport = require("passport");
const configDB = require("./config/database.js");
const session = require("express-session");
const flash = require("connect-flash");
const morgan = require("morgan");
const mongoose = require("mongoose");

const multer = require("multer");
const multerS3 = require("multer-s3");
const shortId = require("shortid");

const s3 = require("./config/s3").s3;

// const s3 = new aws.S3({
//   endpoint,
//   accessKeyId: "232QQZMYI62QW77G2ZKR",
//   secretAccessKey: "sJiHAiEk+Up7Rd/Xy9XTjEY5dw//rcu7he325bUl+J0"
// });

// Init app
const app = express();

// MongoDB connect

const upload = multer({
  storage: multerS3({
    s3,
    bucket: "ecommerceflatiron",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const fileName = `${shortId.generate()}${path.extname(
        file.originalname
      )}`;
      cb(null, fileName);
    }
  })
}).array("file", 1);

app.post("/", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    console.log(req.files[0].location);
    res.sendStatus(200);
  });
});

require("./routes/admin/adminRoutes")(app);

mongoose.connect(configDB.url); // connect to our database

app.use(morgan("dev")); // log every request to the console

app.use(flash()); // use connect-flash for flash messages stored in session

app.listen(port);

// app.use(cookieParser());
// require("./config/passport")(passport);
// app.use(
//   session({
//     secret: "ilovescotchscotchyscotchscotch", // session secret
//     resave: true,
//     saveUninitialized: true
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// require("./app/routes.js")(app); // load our routes and pass in our app and fully configured passport
