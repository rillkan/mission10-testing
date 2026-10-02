const request = require("supertest");
const app = require("./index");

test("GET / responds with 200", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(404);
});

test("GET /health responds with status ok", async () => {
  const res = await request(app).get("/health");
  expect(res.body.status).toBe("ok");
});
