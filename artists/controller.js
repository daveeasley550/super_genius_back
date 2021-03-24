let Artist = require('./model')

let controller = {
  create(request, response){
    let artist = request.body
    Artist
      .create(artist)
      .then(artist=> response.json(artist))
  },
  readById(request, response){
    let id = request.params.id
    Artist
      .findById(id)
      .then(artists=> response.json(artists))
  },
  readAll(request, response){
    Artist
      .find({})
      .then(artists=> response.json(artists))
      .then(data=>console.log(data))
  },
  update(request, response) {
    let artist = request.body
    let id = request.params.id
    Artist
      .findByIdAndUpdate(id, artist, {new: true})
      .then(artist=> response.json(artist))

  },
  destroy(request, response){
    let id = request.params.id
    Artist
      .findByIdAndDelete(id)
      .then(()=> response.json({ok: true}))
  }
}

module.exports = controller