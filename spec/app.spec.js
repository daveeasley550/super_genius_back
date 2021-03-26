const { Body } = require("node-fetch");
require("../app")
let Request = require("request");

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
    // describe("Get /test", ()=>{
    //     let data = {};
    //     beforeAll((done)=>{
    //       Request.get("http://localhost:8000/test", (error, response, body)=>{
    //         data.status = response.statusCode;
    //         data.body =JSON.parse(body);
    //         console.log("!!!")
    //         done();
    //       });  
    //     });
    //     it("Status 200", ()=>{
    //         expect(data.status).toBe(500);
    //     });
    //     it("Body", ()=>{
    //         expect(data.body).toBe("this is an error response")
    //     });
    // });
});