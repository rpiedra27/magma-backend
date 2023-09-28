const app = require('../../server');
const request = require("supertest");

describe("drinks fetch",()=>{
  it("returns status code 200 when fetching drinks", async ()=>{
    const res = await request(app).get("/items/drinks").send();

    expect(res.statusCode).toEqual(200);
  });
});

