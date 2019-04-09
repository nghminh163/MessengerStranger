require("@babel/polyfill");
import { app } from "../server/app";
import request from "supertest";
describe("Test server alive", () => {
  it("Check ping to /ping", done => {
    request(app)
      .get("/ping")
      .expect("pong")
      .expect(200, done);
  });
});
