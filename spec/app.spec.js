const { Body } = require("node-fetch");
require("../app")
let Request = require("request");
const fetch = require("node-fetch")

describe("Server", ()=>{
    let server;
    beforeAll(()=>{
        server = require("../server");//this the export "app"
    });
    afterAll(()=>{
        server.close();
    });
    describe("Get /", ()=>{
        let data = {};
        beforeAll((done)=>{
          Request.get("http://localhost:8000/", (error, response, body)=>{
            data.status = response.statusCode;
            data.body = body;
            done();
          });  
        });
        it("Status 200", ()=>{
            expect(data.status).toBe(200);
        });
        it("Body", ()=>{
            expect(data.body).toBe("Dave and malcolm rule")
        });
    });
    describe("create a song", ()=>{
        beforeAll((done)=>{
            const newSong= {
                name: "LOCAL TEST",
            }
            const requestOptions={
                method: "POST",
                mode: 'cors',
                 headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newSong)
            }
            fetch("https://super-genius-back.herokuapp.com/songs", requestOptions)
            done();
   
  })
          });  
        });
        it("LOCAL TEST", ()=>{
            fetch("https://super-genius-back.herokuapp.com/songs")
            .then(resp=>resp.json())
            .then(returnedSong=>{
            console.log(returnedSong)
            expect(returnedSong.pop()).toBe(newSong);
        });
    });
               
   
   
