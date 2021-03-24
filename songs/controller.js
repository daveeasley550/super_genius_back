let People = require('./peopleModel')
require("../connection")

let controller = {
  create(request, response){
    let people = request.body
    People
      .create(people)
      .then(people=> response.json(people))
  },
  readById(request, response){
    let id = request.params.id
    People
      .findById(id)
      .then(peoples=> response.json(peoples))
  },
  readAll(request, response){
    People
      .find({})
      .then(peoples=> response.json(peoples))
      .then(data=>console.log(data))
  },
  update(request, response) {
    let people = request.body
    let id = request.params.id
    People
      .findByIdAndUpdate(id, people, {new: true})
      .then(people=> response.json(people))

  },
  destroy(request, response){
    let id = request.params.id
    People
      .findByIdAndDelete(id)
      .then(()=> response.json({ok: true}))
  }
}

module.exports = controller