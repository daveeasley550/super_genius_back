let express = require('express')
let artistRouter = require('./artists/router')

let router = new express.Router()
router.use('/artist', artistRouter)//need to make this for artist

module.exports = router