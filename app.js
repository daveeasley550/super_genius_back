let express = require('express')
let router = require('./router')
let cors = require('cors')

let app = express()
app.use(cors())

app.use(express.json())
app.use(router)

module.exports = app
