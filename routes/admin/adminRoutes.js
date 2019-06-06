const AdminArtistController = require("../../controllers/admin/artistController");
const CollectionController = require("../../controllers/admin/collectionController");
const ArtworksController = require("../../controllers/admin/artworkController");
const ContactController = require("../../controllers/client/contactController");

module.exports = function(app) {
  // Artists
  app.get("/api/artists", AdminArtistController.getArtists);
  app.get("/api/artists/:id", AdminArtistController.getArtist);
  app.post("/api/artists", AdminArtistController.createArtist);
  app.patch("/api/artists/:id", AdminArtistController.updateArtist);
  app.delete("/api/artists/:id", AdminArtistController.deleteArtist);

  // Collections
  app.get("/api/collections", CollectionController.getCollections);
  app.get("/api/collections/:id", CollectionController.getCollection);
  app.post("/api/collections/:id", CollectionController.createCollection);
  app.patch("/api/collections/:id", CollectionController.updateCollection);
  app.delete("/api/collections/:id", CollectionController.deleteCollection);

  // Artworks
  app.get("/api/artworks", ArtworksController.getArtworks);
  app.get("/api/artworks/:id", ArtworksController.getArtwork);
  app.post("/api/artworks", ArtworksController.createArtwork);
  app.patch("/api/artworks/:id", ArtworksController.updateArtwork);
  app.delete("/api/artworks/:id", ArtworksController.deleteArtwork);

  // Helpet routes
  app.get("/api/artworks-slider", ArtworksController.getSliderArtworks);

  // Contact
  app.post("/api/contact", ContactController.submitContact);
};
