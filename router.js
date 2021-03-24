let express = require('express')
let router = new express.Router()

let artistRouter = require('./artists/router')
let songRouter = require('./songs/router')

router.use('/artist', artistRouter)
router.use('/songs', songRouter)

module.exports = router