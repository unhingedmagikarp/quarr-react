module.exports = function(app) {
  // Bodyparser to receive input from html body
  const bodyParser = require("body-parser");
  app
    .use(bodyParser())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());

  // busboy config for image process and shortid for unique name
  const busboyBodyParser = require("busboy-body-parser");
  const busboy = require("connect-busboy");
  const shortID = require("shortid");
  const Busboys = require("busboy");
  // aws-sdk for s3 image upload
  const AWS = require("aws-sdk");

  app.use(busboy()).use(busboyBodyParser());

  // models
  const Contact = require("../models/contact");
  const User = require("../models/user");
  const Artist = require("../models/artist");
  const Art = require("../models/artwork");
  const Collection = require("../models/collection");

  // configuration for S3 bucket
  const IAM_USER_SECRET = "TfzIdLSSVEwnlarEWfhB/N4SCEwbKTskMGQ/5IR4";
  const IAM_USER_KEY = "AKIAJMUSPSARVSKOTKRQ";
  const BUCKET_NAME = "quarr-images";

  // render homepage
  app.get("/", (req, res) => {
    res.send("so healthy").status(200);
  });

  // render blog
  // search blogposts later
  app.get("/blog", (req, res) => {
    res.status(200);
  });

  // show the details of the blogpost
  app.get("/blogpost/:num", (req, res) => {
    res.send("not ready");
  });

  // render contact us page
  /*
  app.get("/contact-us", (req, res) => {
    res
      .set("Cache-Control", "max-age=604800")
      .status(200)
      .render("contact-us.pug");
  });
  
  // render confirmation page after user contact
  app.get("/thanks", (req, res) => {
    res
      .set("Cache-Control", "max-age=604800")
      .status(200)
      .render("thanks.pug");
  });

  // render privacy page
  app.get("/privacy", (req, res) => {
    res
      .set("Cache-Control", "max-age=604800")
      .status(200)
      .render("privacy.pug");
  });

  // render workshop page
  app.get("/workshop", (req, res) => {
    res
      .set("Cache-Control", "max-age=604800")
      .status(200)
      .render("workshop.pug");
  });
  */
  // ADMIN PAGES

  // check if user is logged in
  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     return next();
  //   }
  //   res.status(403).redirect("/403");
  // }

  // // admin profile
  // app.get("/admin-profile", (req, res) => {
  //   res
  //     .set("Cache-Control", "max-age=604800")
  //     .status(200)
  //     .render("admin_profile.pug");
  // });

  // logout
  // app.get("/admin-logout", (req, res) => {
  //   req.logout();
  //   res.redirect("/");
  // });

  // // show the login form
  // app.get("/admin-login", (req, res) => {
  //   res
  //     .set("Cache-Control", "max-age=604800")
  //     .status(200)
  //     .render("login.pug", {
  //       message: req.flash("loginMessage")
  //     });
  // });

  // // process the login form
  // app.post(
  //   "/admin-login",
  //   passport.authenticate("local-login", {
  //     successRedirect: "/admin-profile", // redirect to the secure profile section
  //     failureRedirect: "/admin-login", // redirect back to the signup page if there is an error
  //     failureFlash: true // allow flash messages
  //   })
  // );

  // // show the signup form
  // app.get("/admin-signup", (req, res) => {
  //   res
  //     .set("Cache-Control", "max-age=604800")
  //     .status(200)
  //     .render("signup.pug", {
  //       message: req.flash("signupMessage")
  //     });
  // });

  // // process the signup form
  // app.post(
  //   "/admin-signup",
  //   passport.authenticate("local-signup", {
  //     successRedirect: "/profile", // redirect to the secure profile section
  //     failureRedirect: "/signup", // redirect back to the signup page if there is an error
  //     failureFlash: true // allow flash messages
  //   })
  // );

  // post contact info to db
  app.post("/api/contact", (req, res) => {
    Contact.create(req.body)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
      });
  });

  // get all users from db and display them on admin panel
  app.get("/admin-users", (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res
          .status(404)
          .set("Cache-Control", "max-age=604800")
          .redirect("/404");
      } else {
        res
          .set("Cache-Control", "max-age=604800")
          .status(200)
          .render("admin_users.pug", {
            item: users
          });
      }
    });
  });

  // render all artists on admin page
  app.get("/admin-artists", (req, res) => {
    Artist.find({}, function(err, artists) {
      console.log(artists);
      if (err) {
        res
          .status(404)
          .set("Cache-Control", "max-age=604800")
          .redirect("/404");
      } else {
        res
          .set("Cache-Control", "max-age=604800")
          .status(200)
          .render("admin_artists", {
            item: artists
          });
      }
    });
  });

  // upload image to S3
  function uploadToS3(file) {
    let s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET,
      Bucket: BUCKET_NAME,
      ACL: "public-read"
    });
    s3bucket.createBucket(() => {
      var params = {
        Bucket: BUCKET_NAME,
        Key: file.name,
        Body: file.data
      };
      s3bucket.upload(params, (err, data) => {
        if (err) {
          //console.log("error in callback");
          //console.log(err);
        }
      });
    });
  }

  // add artist to database
  app.post("/new-artist", (req, res) => {
    const busboy = new Busboys({ headers: req.headers });
    busboy.on("finish", function() {
      if (req.body.copyright == "on") {
        req.body.copyright = true;
      } else {
        req.body.copyright = false;
      }
      const file = req.files.image;
      file.name = shortID.generate() + ".jpg";
      uploadToS3(file);
      req.body.picture = "https://quarr-images.s3.amazonaws.com/" + file.name;
      req.body.artistUrl = req.body.name
        .split(" ")
        .join("-")
        .toLowerCase();
      Artist.create(req.body);
    });
    req.pipe(busboy);
    res.redirect("/admin-artists");
  });

  // get detailed artist view on admin page
  app.get("/admin-artists/:id", (req, res) => {
    const id = req.params.id;
    Artist.find({ artistUrl: id }, function(err, artists) {
      if (err || undefined || null || artists.length == 0) {
        res.redirect("/404");
      } else {
        res
          .set("Cache-Control", "max-age=604800")
          .status(200)
          .render("admin_detailed_artist", {
            items: artists[0]
          });
      }
    });
  });

  // update artist
  app.post("/admin-artists-update/:id", (req, res) => {
    if (req.body.copyright == "on") {
      req.body.copyright = true;
    } else {
      req.body.copyright = false;
    }
    Artist.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
      Artist.findOne({ _id: req.params.id });
      res.redirect("/admin-artists");
    });
  });

  // function to delete from S3
  function deletePicture(params) {
    console.log(params);
    const s3bucket = new AWS.S3({
      accessKeyId: IAM_USER_KEY,
      secretAccessKey: IAM_USER_SECRET,
      Bucket: BUCKET_NAME,
      ACL: "public-read"
    });
    s3bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }

  // function for delete artist
  function deleteArtist(req) {
    Artist.find({ _id: req.params.id }).then(function(artist) {
      let params = {
        Bucket: BUCKET_NAME,
        Key: artist[0].picture.split(".com/")[1]
      };
      deletePicture(params);
    });
  }

  // function to delete collection
  function deleteCollection(req) {
    Collection.find({ _id: req.params.id }).then(function(artist) {
      let params = {
        Bucket: BUCKET_NAME,
        Key: artist[0].image.split(".com/")[1]
      };
      deletePicture(params);
    });
  }

  // delete artist
  app.post("/admin-artists-delete/:id", (req, res) => {
    deleteArtist(req);
    Artist.findByIdAndRemove({ _id: req.params.id }).then(function() {
      res.redirect("/admin-artists");
    });
  });

  // delete collection
  app.post("/admin-collection-delete/:id", (req, res) => {
    deleteCollection(req);
    Collection.findByIdAndRemove({ _id: req.params.id }).then(function() {
      res.redirect("/admin-collections");
    });
  });

  // render usercontacts on admin site
  app.get("/admin-contacts", (req, res) => {
    Contact.find({}, (err, contacts) => {
      if (err) {
        res
          .status(404)
          .set("Cache-Control", "max-age=604800")
          .redirect("/404");
      } else {
        res
          .set("Cache-Control", "max-age=604800")
          .status(200)
          .render("admin_usercontacts.pug", {
            item: contacts
          });
      }
    });
  });

  /*
    function getArtists() {
        Artist.find({}, (err, artist) => {
            if (err) {
                console.log(err)
            } else {
                console.log(artist)
                let art = artist
                return art
            }
        })
    }


    function getCollections() {
        Collection.find({}, (err, collection) => {
            if (err) {
                console.log(err)
            } else {
                let item  = collection
                return item
            }
        })
    }
    */

  // render admin-collections page
  app.get("/admin-collections", (req, res) => {
    Collection.find({}, (err, collection) => {
      if (err) {
        res
          .status(404)
          .set("Cache-Control", "max-age=604800")
          .redirect("/404");
      } else {
        res
          .set("Cache-Control", "max-age=604800")
          .status(200)
          .render("admin_collections.pug", {
            item: collection
          });
      }
    });
  });

  // send artist names, JSON
  app.get("/artist-names", (req, res) => {
    Artist.find({}, (err, artist) => {
      if (err) {
      } else {
        res.send({ items: artist });
      }
    });
  });

  // admin add collection
  app.post("/admin-addCollection", (req, res) => {
    Collection.find({ collectionName: req.body.collectionName }, function(
      err,
      next
    ) {
      if (next.length == 0) {
        const busboy = new Busboys({ headers: req.headers });
        busboy.on("finish", function() {
          const file = req.files.image;
          file.name = shortID.generate() + ".jpg";
          uploadToS3(file);
          req.body.image = "https://quarr-images.s3.amazonaws.com/" + file.name;
          req.body.artistUrl = req.body.artist
            .split(" ")
            .join("-")
            .toLocaleLowerCase();
          req.body.collectionUrl = req.body.collectionName
            .split(" ")
            .join("-")
            .toLocaleLowerCase();
          Collection.create(req.body);
        });
        req.pipe(busboy);
        res.redirect("/admin-collections");
      } else {
        res.send("not ok");
      }
    });
  });

  // detailed collection view
  app.get("/admin-collections/:id", (req, res) => {
    const id = req.params.id;
    Collection.find({ _id: id }, function(err, collection) {
      if (err || undefined || null || collection.length == 0) {
        res.redirect("/404");
      } else {
        res
          .set("Cache-Control", "max-age=604800")
          .status(200)
          .render("admin_detailed_collection", {
            items: collection[0]
          });
      }
    });
  });

  // admin add artwork
  app.post("/admin-addArtwork", (req, res) => {
    //const position = req.params.id;
    req.body.price = req.body.price.split(",");
    req.body.size = req.body.size.split(",");
    Art.find({ name: req.body.name }, function(err, next) {
      if (next.length == 0) {
        if (req.body.forSale == "on") {
          req.body.forSale = true;
        } else {
          req.body.forSale = false;
        }
        if (req.body.sold == "on") {
          req.body.sold = true;
        } else {
          req.body.sold = false;
        }

        const busboy = new Busboys({ headers: req.headers });
        busboy.on("finish", function() {
          const file = req.files.image;
          file.name = shortID.generate() + ".jpg";
          uploadToS3(file);
          req.body.image = "https://quarr-images.s3.amazonaws.com/" + file.name;
          req.body.artistUrl = req.body.artist
            .split(" ")
            .join("-")
            .toLocaleLowerCase();
          req.body.collectionUrl = req.body.collectionName
            .split(" ")
            .join("-")
            .toLocaleLowerCase();
          req.body.price.availablePrice = req.body.price;
          req.body.size.availableSize = req.body.size;
          let artPiece = new Art({
            artist: req.body.artist,
            artistUrl: req.body.artistUrl,
            name: req.body.name,
            categoryType: req.body.categoryType,
            description: req.body.description,
            price: [req.body.price],
            size: [req.body.size],
            forSale: req.body.forSale,
            sold: req.body.sold,
            collectionName: req.body.collectionName,
            image: req.body.image
          });
          artPiece.save();
        });
        req.pipe(busboy);
        res.redirect("/admin-collections/");
      } else {
        res.send("not ok");
      }
    });
  });

  // detailed artwork view
  // test
  app.get("/admin-art", (req, res) => {
    const id = req.params.id;
    Art.find({}, function(err, art) {
      if (err || undefined || null || art.length == 0) {
        res.redirect("/404");
      } else {
        res.send([art[0].price[0].availablePrice]);
      }
    });
  });

  // 403
  app.get("/403", (req, res) => {
    res
      .set("Cache-Control", "max-age=604800")
      .status(403)
      .render("403.pug");
  });

  // 404
  app.get("*", (req, res) => {
    res
      .set("Cache-Control", "max-age=604800")
      .status(404)
      .render("404.pug");
  });
};
