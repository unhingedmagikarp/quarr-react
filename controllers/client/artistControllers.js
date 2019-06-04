// render every artist from db
app.get("/api/artists", (req, res) => {
  Artist.find({}, (err, artists) => {
    if (err) {
      res.status(404);
    } else {
      res.json(artists).status(200);
    }
  });
});

// render selected artist
app.get("/artists/:name", (req, res) => {
  const name = req.params.name;
  Collection.find({ artistUrl: name }, (err, collections) => {
    if (err || undefined || null || collections.length == 0) {
      res.status(404);
    } else {
      res.json(collections).status(200);
    }
  });
});
