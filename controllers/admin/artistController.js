const Artist = require("../../models/artist");
const slugify = require("../../config/helperMethods").slugify;
const upload = require("../../config/helperMethods").upload;

module.exports = {
  getArtists: async (req, res, next) => {
    const artists = await Artist.find({});
    // .populate("collections");
    res.status(200).json(artists);
  },

  getArtist: async (req, res, next) => {
    const artist = await Artist.findById(req.params.id);
    // .populate("collections");
    if (!artist) res.sendStatus(500);
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
        copyright: req.body.copyright ? true : false
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
  },

  getBySlug: async (req, res, next) => {
    Artist.findOne({ slug: req.params.slug })
      .populate("collections artworks")
      .then(artist => {
        res.json(artist);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },

  deleteAll: async (req, res, next) => {
    Artist.remove({}, (resp, err) => {
      res.sendStatus(200);
    });
  }
};
