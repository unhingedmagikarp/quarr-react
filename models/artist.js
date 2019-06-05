const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  collections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "collectionModel"
    }
  ],
  picture: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  slug: {
    type: String,
    required: false
  },
  copyright: {
    type: Boolean,
    required: true,
    default: true
  }
});

const artistModel = mongoose.model("artistModel", artistSchema);

module.exports = artistModel;
