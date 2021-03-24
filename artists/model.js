let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
  uid: String,  
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String
});
module.exports = mongoose.model("People", peopleSchema);
