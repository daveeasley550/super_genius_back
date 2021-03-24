let mongoose = require('mongoose')

let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }
let connectionString = "mondodb://localhost/artists"
if(process.env.NODE_ENV==="production"){
    connectionString=process.env.DB_URL
}else {
    connectionString="mondodb://localhost/artists"
}
mongoose.connect(connectionString, mongooseConnectionConfig)


mongoose.connect(connectionString, mongooseConnectionConfig);