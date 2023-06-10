const { expect } = require("chai");
const {
  syncAndSeed,
  models: { Artist, Album, Track, Song },
} = require("../db/db");
//pull in express app from server.js and wrap it with supertest
const app = require("supertest")(require("../api/app"));

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
  describe("GET /api/albums", () => {
    it("returns 3 albums", async () => {
      const response = await app.get("/api/albums");
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(3);
    });
  });
  describe("GET /api/songs/search/:term", () => {
    it("returns song names containing matching word in title", async () => {
      const rain = "Rain";
      const response = await app.get(`/api/songs/search/${rain}`);
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(1);
    });
  });
});
