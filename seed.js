// require("./database");
// let mongoose = require("mongoose");
// let artistModel = require('./artists/model');
// let songModel = require('./songs/model');
// let artistData = require("./data/artistAPIData.json");
// let songData = require("./data/songAPIData.json");

// artistModel.deleteMany({}).then(
//   artistModel.create(artistData).then((artists) => {
//     console.log(artists.length, "Artist JSON created!");
//   })
// );

// songModel.deleteMany({}).then(
//   songModel.create(songData).then((songs) => {
//     console.log(songs.length, "Song JSON created!");
//     mongoose.disconnect();
//   })
// );