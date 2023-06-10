const {
  syncAndSeed,
  models: { Artist, Album, Track, Song },
} = require("../db/db");
const express = require("express");
const app = express();

const searchFunction = (word, array) => {
  let songArray = []
  for (let name in array) {
    let current = array[name]
    if(current.name.includes(word)) {
      songArray.push(current)
   }
  }
  return songArray
}

app.use(express.json());

app.get("/api/artists", async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/albums", async (req, res) => {
  try {
    const albums = await Album.findAll({
      attributes: ["name"],
      include: [{ model: Artist, attributes: ["name"] }],
    });
    res.send(albums);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/songs/search/:term", async (req, res) => {
  try {
    const term = req.params.term
    const songs = await Song.findAll({
      attributes: ["name"],
    });
    const list = searchFunction(term, songs)
    res.send(list);
  } catch (error) {
    console.error(error);
  }
});

module.exports = app;
