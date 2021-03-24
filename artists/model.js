let mongoose = require("mongoose");

let artistSchema = new mongoose.Schema({
  artists: {
    artist: [{}]
  }
  
});

let Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist
