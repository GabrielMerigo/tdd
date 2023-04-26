const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Application", () => {
  it("should return status code 200", async () => {
    const result = await request.get("/");

    expect(result.statusCode).toEqual(200);
  });

  it("should return blue as favorite color", async () => {
    const result = await request.get("/color");

    expect(result.body.color).toEqual("blue");
  });
});
