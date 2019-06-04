const Artist = require("../../models/artist");
const multer = require("multer");
const multerS3 = require("multer-s3");
const shortId = require("shortid");
const s3 = require("../../config/s3").s3;
const path = require("path");

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.BUCKET,
    acl: process.env.ACL,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const fileName = `${shortId.generate()}${path.extname(
        file.originalname
      )}`;
      cb(null, fileName);
    }
  })
}).array("file", 1);

slugify = name =>
  name
    .toLowerCase()
    .split(" ")
    .join("");

module.exports = {
  getArtists: async (req, res, next) => {
    const artists = await Artist.find({});
    res.status(200).json(artists);
  },

  getArtist: async (req, res, next) => {
    const artist = await Artist.find({ _id: req.params.id });
    res.status(200).json(artist);
  },

  createArtist: async (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        res.sendStatus(500);
      }
      Artist.create({
        name: req.body.name,
        picture: req.files[0].location,
        description: req.body.description,
        slug: slugify(req.body.name),
        copyright: true
      }).then(artist => {
        res.send(artist);
      });
    });
  },

  updateArtist: async (req, res, next) => {
    if (req.files) {
      upload(req, res, err => {
        if (err) {
          res.sendStatus(500);
        }
        Artist.findOneAndUpdate({
          _id: req.params.id,
          name: req.body.name,
          picture: req.files[0].location,
          description: req.body.description,
          slug: slugify(req.body.name),
          copyright: true
        }).then(artist => res.send(artist));
      });
    } else {
      try {
        Artist.findOneAndUpdate({
          _id: req.params.id,
          name: req.body.name,
          picture: req.files[0].location,
          description: req.body.description,
          slug: slugify(req.body.name),
          copyright: true
        }).then(artist => res.send(artist));
      } catch (error) {
        res.sendStatus(500);
      }
    }
  },

  deleteArtist: async (req, res, next) => {
    Artist.findOneAndDelete({ _id: req.params.id })
      .then(artist => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
};
