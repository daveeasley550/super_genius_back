let express = require('express')
let artistRouter = require('./artists/router')

let router = new express.Router()
router.use('/artist', artistRouter)

let express = require('express')
let songRouter = require('./songs/router')

let router = new express.Router()
router.use('/songs', songRouter)

module.exports = router