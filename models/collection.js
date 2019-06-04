const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  artistUrl: {
    type: String,
    required: true
  },
  collectionName: {
    type: String,
    required: true
  },
  collectionUrl: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  categoryType: {
    type: String
  }
});

const collectionModel = mongoose.model("collectionModel", collectionSchema);

module.exports = collectionModel;
