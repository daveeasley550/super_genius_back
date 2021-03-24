// let peopleJson = require('./people.json')
// let peopleModel = require('./goodies/peopleModel')
// let mongoose=require("mongoose")
// require("./connection")

// peopleModel
//   .deleteMany({})//clears all before making multiple
//   // console.log(peopleJson[0].result.properties)
//   .then(()=> peopleModel.create(peopleJson))
//   .then(mongoose.disconnect)
//   .then(()=> console.log("Done!"))





require("./database");
let mongoose = require("mongoose");
let peopleModel = require('./goodies/peopleModel');
let websiteData = require("./people.json");
peopleModel.deleteMany({}).then(
  peopleModel.create(websiteData).then((peopleJson) => {
    console.log(peopleJson.length, "website starwars created");
    mongoose.disconnect();
  })
);