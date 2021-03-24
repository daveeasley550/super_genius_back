let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: String,
 
});
module.exports = mongoose.model("Song", songSchema);