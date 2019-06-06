const mongoose = require("mongoose");

// const sizeSchema = mongoose.Schema({
//   availableSize: [
//     {
//       type: String
//     }
//   ]
// });

// const priceSchema = mongoose.Schema({
//   availablePrice: [
//     {
//       type: Number
//     }
//   ]
// });

const artworkSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
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
  forSale: {
    type: Boolean,
    required: true
  },
  sold: {
    type: Boolean,
    required: true
  },
  size: [],
  price: [],
  picture: {
    type: String,
    required: true
  },
  collectionName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "collectionModel"
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "artistModel"
  }
});

const artworkModel = mongoose.model("artworkModel", artworkSchema);

module.exports = artworkModel;
