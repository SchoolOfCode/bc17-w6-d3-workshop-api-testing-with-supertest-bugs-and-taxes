import {expect, test, expectTypeOf} from "vitest";
import request from "supertest";
import app from "../app.js";
import {seedData} from "../db/seed-data.js";
import{resetUsersTable} from "../db/helpers.js";


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

  // write a test skeleton with a descriptive test name ("GET /api/users" could be a starting point) done

   test("GET/api/users", async  function () {
   const dbReset = await resetUsersTable(seedData);
   const response = await request(app).get("/api/users");
   expect(response.headers["content-type"]).toMatch(/json/);
   expect(response.status).toEqual(200);
   expect(response.body).toBeTypeOf("object");
   expect(response.body.success).toBe(true);
   expectTypeOf(response.body.payload).toBeArray(); 


   })
    
// run tests to make sure the skeleton passes on its own done

// then within the test:
//    ARRANGE:
//      use the `resetUsersTable` function to reset the database table to a known state done

//    ACT:
//      use Supertest to send a GET request to the `/api/users` endpoint
//      wait for the response done
//    ASSERT:
//      assert that the response body is an object done
//      assert that response body.success is true done
//      assert that response body.payload is an array done
//      loop over the payload array. for each user object in the payload array:
//          assert that user object.id is a number
//          assert that user object.username is a string
//      assert that the response status code is 200
//      assert that there's a Content-Type response header which contains `application/json`
//      any other assertions that you think would be useful
// run tests to ensure they passes
// temporarily break the implementation in `users/users.controller.js` to ensure test fails and then change back so that tests pass
