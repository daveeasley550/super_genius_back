require("./database")
let fetch = require("node-fetch")
let mongoose =require("mongoose")
let artistModel = require("./artists/model")
let songModel =require("./songs/model")
let artist = require("./artists/artistAPIData.json")
let songData = require("./songs/songAPIData.json")
let fs = require("fs").promises

let artistURL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=864ffe55118cd2944b873cafe1db1c40&format=json"
let trackURL = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=864ffe55118cd2944b873cafe1db1c40&format=json"
fetch(artistURL)
    .then(res => res.json())
    .then(data => fs.writeFile("./artistAPIData.json", JSON.stringify(data)))
    .then(()=>{
        artistModel
            .deleteMany({})
            .then(
                artistModel.create(artistData).then(data=> {
                    console.log(data.length)
                })
            )
    })


fetch(trackURL)
    .then(res => res.json())
    .then(data => fs.writeFile("./songAPIData.json", JSON.stringify(data)))
    .then(()=>{
        songModel
            .deleteMany({})
            .then(
                songModel.create(songData).then(data=> {
                    console.log(data.length)
                    mongoose.disconnect()
                })
            )
    })
