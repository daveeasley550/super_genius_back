let mongoose = require("mongoose");

let artistSchema = new mongoose.Schema({
  name: String,
});

let Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist
