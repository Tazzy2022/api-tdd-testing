const { expect } = require("chai");
const {
  syncAndSeed,
  models: { Artist, Album, Track, Song },
} = require("../db/db");
//pull in express app from server.js and wrap it with supertest
const app = require("supertest")(require("../server"));

describe("Routes", () => {
  let seed;
  beforeEach(async () => {
    seed = await syncAndSeed();
  });
  describe("GET /api/artists", () => {
    it("returns 3 artists", async () => {
      const response = await app.get("/api/artists");
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(3);
    });
  });
});
