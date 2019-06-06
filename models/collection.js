const mongoose = require("mongoose");

const collectionSchema = mongoose.Schema({
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "artistModel"
  },
  artworks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artworkModel"
    }
  ],
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  picture: {
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
