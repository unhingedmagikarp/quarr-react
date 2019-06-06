const Artwork = require("../../models/artwork");
const Artist = require("../../models/artist");
const Collection = require("../../models/collection");
const slugify = require("../../config/helperMethods").slugify;
const upload = require("../../config/helperMethods").upload;

module.exports = {
  getArtworks: async (req, res, next) => {
    const artwork = await Artwork.find({});
    // .populate("collection artist");
    res.status(200).json(artwork);
  },

  getArtwork: async (req, res, next) => {
    const artwork = await Artwork.findById(req.params.id);
    // .populate(
    //   "collection artist"
    // );
    if (!artwork) res.sendStatus(500);
    res.status(200).json(artwork);
  },

  createArtwork: async (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        res.sendStatus(500);
      }
      const artwork = new Artwork({
        name: req.body.name,
        picture: req.files[0].location,
        description: req.body.description,
        slug: slugify(req.body.name),
        forSale: true,
        size: req.body.size,
        price: req.body.price,
        sold: false,
        categoryType: req.body.category
      });
      Artist.findById(req.body.artist, (err, artist) => {
        if (err) {
          res.send(err);
        }
        artwork.artist = artist;
        Collection.findById(req.body.collection, (err, collection) => {
          artwork.collectionName = collection;
          artwork.save();
          artist.artworks.unshift(artwork);
          artist.save();
          collection.artworks.unshift(artwork);
          collection.save(function(err) {
            console.log(err);
          });
          //^5.1.5
          res.json(artwork);
        });
      });
    });
  },

  updateArtwork: async (req, res, next) => {
    if (req.files) {
      upload(req, res, err => {
        if (err) {
          res.sendStatus(500);
        }
        Artwork.findOneAndUpdate({
          _id: req.params.id,
          name: req.body.name,
          picture: req.files[0].location,
          description: req.body.description,
          slug: slugify(req.body.name),
          copyright: true
        }).then(artwork => res.send(artwork));
      });
    } else {
      try {
        Artwork.findOneAndUpdate({
          _id: req.params.id,
          name: req.body.name,
          picture: req.files[0].location,
          description: req.body.description,
          slug: slugify(req.body.name),
          copyright: true
        }).then(artwork => res.send(artwork));
      } catch (error) {
        res.sendStatus(500);
      }
    }
  },

  deleteArtwork: async (req, res, next) => {
    Artwork.findOneAndDelete({ _id: req.params.id })
      .then(artwork => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },

  getSliderArtworks: async (req, res, next) => {
    Artwork.find({})
      .then(artwork => {
        res.json(artwork.slice(0, 3));
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  deleteAll: async (req, res, next) => {
    Artwork.remove({}, (resp, err) => {
      res.sendStatus(200);
    });
  }
};
