 let express = require('express')
let router = require('./router')
let cors = require('cors')

let app = express()
app.use(cors())

app.use(express.json())
app.use(router)


//testing stuff//
app.get("/", (request, response)=>{
    response.status(200).send("Dave and malcolm rule");
});
app.get("/test", (request, response)=>{
    response.status(500).send("this is an error response");
});
let server = app.listen(8000, ()=>{
    console.log("we are listening on port" + server.address().port);
});
//end of testing stuff//
module.exports = app
