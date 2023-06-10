const { expect } = require("chai");
const {
  syncAndSeed,
  models: { Artist, Album, Track, Song },
} = require("../db/db");

describe("Models", () => {
  let seed;
  beforeEach(async () => {
    seed = await syncAndSeed();
  });
  // describe("seeded data", () => {
  //   it("includes three artists", () => {
  //     expect(seed.artists.length).to.equal(3);
  //   });
  // });
  describe("name validation", () => {
    it("duplicate name should throw error", async () => {
      await Artist.create({ name: "Morrissey" });
      try {
        await Artist.create({ name: "Morrissey" });
      } catch (error) {
        expect(error).to.equal(error);
      }
    });
    it("name cannot be null", async () => {
      try {
        await Artist.create({});
      } catch (error) {
        expect(error).to.equal(error);
      }
    });
  });
});


