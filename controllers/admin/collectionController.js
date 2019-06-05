const Collection = require("../../models/collection");
const Artist = require("../../models/artist");
const slugify = require("../../config/helperMethods").slugify;
const upload = require("../../config/helperMethods").upload;

module.exports = {
  getCollections: async (req, res, next) => {
    const collections = await Collection.find({});
    res.status(200).json(collections);
  },

  getCollection: async (req, res, next) => {
    const collection = await Collection.find({ _id: req.params.id });
    res.status(200).json(collection);
  },

  createCollection: async (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        res.sendStatus(500);
      }
      const newCollection = new Collection({
        name: req.body.name,
        picture: req.files[0].location,
        description: req.body.description,
        slug: slugify(req.body.name)
        // categoryType: ''
      });
      Artist.findById(req.params.id, (err, artist) => {
        if (err) {
          res.send(err);
        }
        newCollection.artist = artist;
        newCollection.save();
        artist.collections.push(newCollection);
        artist.save();
        res.json(newCollection);
      });
    });
  },

  updateCollection: async (req, res, next) => {
    if (req.files) {
      upload(req, res, err => {
        if (err) {
          res.sendStatus(500);
        }
        Collection.findOneAndUpdate({
          _id: req.params.id,
          name: req.body.name,
          picture: req.files[0].location,
          description: req.body.description,
          slug: slugify(req.body.name),
          copyright: true
        }).then(collection => res.send(collection));
      });
    } else {
      try {
        Collection.findOneAndUpdate({
          _id: req.params.id,
          name: req.body.name,
          picture: req.files[0].location,
          description: req.body.description,
          slug: slugify(req.body.name),
          copyright: true
        }).then(collection => res.send(collection));
      } catch (error) {
        res.sendStatus(500);
      }
    }
  },

  deleteCollection: async (req, res, next) => {
    Collection.findOneAndDelete({ _id: req.params.id })
      .then(collection => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
};
