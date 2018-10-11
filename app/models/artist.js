const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
  name: {
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
  artistUrl: {
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
