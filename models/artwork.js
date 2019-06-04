const mongoose = require("mongoose");

const sizeSchema = mongoose.Schema({
  availableSize: [
    {
      type: String
    }
  ]
});

const priceSchema = mongoose.Schema({
  availablePrice: [
    {
      type: Number
    }
  ]
});

const artSchema = mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  artistUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  categoryType: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: [priceSchema],

  forSale: {
    type: Boolean,
    required: true
  },
  sold: {
    type: Boolean,
    required: true
  },
  size: [sizeSchema],
  collectionName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const artModel = mongoose.model("artModel", artSchema);

module.exports = artModel;
