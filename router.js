let express = require('express')
let artistRouter = require('./goodies/router')

let router = new express.Router()
router.use('/peoples', artistRouter)

module.exports = router