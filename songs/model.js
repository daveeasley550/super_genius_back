let mongoose = require("mongoose");

let songSchema = new mongoose.Schema({
  tracks: {
    track: [{
      name: String,
      playcount:Number
    }]
  }
});

let Song = mongoose.model("Song", songSchema);

module.exports = Song