const { expect } = require("chai");
const {
  syncAndSeed,
  models: { Artist, Album, Track, Song },
} = require("../db/db");

describe("Routes", () => {
  let seed;
  beforeEach(async () => {
    seed = await syncAndSeed();
  });
});
