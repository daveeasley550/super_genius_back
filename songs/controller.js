let Song = require('./model')

let controller = {
  create(request, response){
    let song = request.body
   Song
      .create(song)
      .then(song=> response.json(song))
  },
  readById(request, response){
    let id = request.params.id
    Song
      .findById(id)
      .then(songs=> response.json(songs))
  },
  readAll(request, response){
    Song
      .find({})
      .then(songs=> response.json(songs))
      .then(data=>console.log(data))
  },
  update(request, response) {
    let song = request.body
    let id = request.params.id
    Song
      .findByIdAndUpdate(id, song, {new: true})
      .then(song=> response.json(song))

  },
  destroy(request, response){
    let id = request.params.id
    Song
      .findByIdAndDelete(id)
      .then(()=> response.json({ok: true}))
  }
}

module.exports = controller