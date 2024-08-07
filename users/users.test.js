import {expect, test} from "vitest";
import request from "supertest";
import app from "../app.js"

// Goal: make a GET request with Supertest to the /api/health
//
// import the Express app from app.js (because it needs to be tested)       done
// import the function from Supertest (maybe call it `request` like the documentation did)      done
// within the existing test, follow the example from the documentation and:
//    call `request` and pass in the Express app as an argument
//    send a GET request to the /api/health endpoint
//    await the overall expression and assign it to a `response` constant
//    console.log `response.body` for now to at least see a result

// app.get("/api/health", (req, res) => {
//     res.json({
//       success: true,
//       payload: "API is running correctly",
//     });
//   });

test("GET /api/health works", () => {
    

})



// app.get("/user", function (req, res) {
//   res.status(200).json({ 
//     name: "john" });
// });


  test("responds with json", async function () {
    const response = await request(app).get("/api/health");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
        success: true,
        payload: "API is running correctly",
      });
  });

