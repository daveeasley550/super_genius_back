let mongoose = require("mongoose");

let songSchema = new mongoose.Schema({
  name: String,
});

let Song = mongoose.model("Song", songSchema);

module.exports = Song