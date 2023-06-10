const {
  syncAndSeed,
  models: { Artist, Album, Track, Song },
} = require('../db/db')
const app = require('../server')

app.use(express.json())

app.get('/api/artists', async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.send(artists)
  } catch (error) {
    console.error(error)
  }
})
