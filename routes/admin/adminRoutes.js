const AdminArtistController = require("../../controllers/admin/artistController");

module.exports = function(app) {
  app.get("/api/artists", AdminArtistController.getArtists);

  app.get("/api/artists/:id", AdminArtistController.getArtist);

  app.post("/api/artists", AdminArtistController.createArtist);
};
