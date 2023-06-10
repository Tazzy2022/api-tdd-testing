const Sequelize = require("sequelize");
const { UUID, UUIDV4, STRING, INTEGER, VIRTUAL } = Sequelize;
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/music_api_testing_db"
);

const Artist = db.define("artist", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  // createdAt: false,
  // updatedAt: false,
});

const Song = db.define("song", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  duration: {
    type: INTEGER,
  },
});

// Song.findBySearchedWord = function() {
//   return Song.findAll({
//     where: {

//     }
//   })
// }

const Album = db.define("album", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  // timestamps: false,
});

const Track = db.define("track", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  index: {
    type: INTEGER,
  },
  // timestamps: false,
});

Song.belongsTo(Artist);
Artist.hasMany(Song);

Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Track);
Song.hasMany(Track);

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    const [prince, smiths, cure] = await Promise.all([
      Artist.create({ name: "Prince" }),
      Artist.create({ name: "The Smiths" }),
      Artist.create({ name: "The Cure" }),
    ]);

    const [purple, suedehead, friday] = await Promise.all([
      Song.create({ name: "Purple Rain", duration: 120 }),
      Song.create({ name: "Suedehead", duration: 140 }),
      Song.create({ name: "Friday I'm in Love", duration: 160 }),
    ]);

    const [prnce, smths, cre] = await Promise.all([
      Album.create({ name: "Best of Prince" }),
      Album.create({ name: "Best of The Smiths" }),
      Album.create({ name: "Best of The Cure" }),
    ]);

    const [two, four, five] = await Promise.all([
      Track.create({ index: 2 }),
      Track.create({ index: 4 }),
      Track.create({ index: 5 }),
    ]);

    (prnce.artistId = prince.id),
      (smths.artistId = smiths.id),
      (cre.artistId = cure.id),
      (purple.artistId = prince.id),
      (suedehead.artistId = smiths.id),
      (friday.artistId = cure.id),
      // two.songId = purple.id,
      // four.songId = suedehead.id,
      // five.songId = friday.id,
      // two.songId = prnce.id,
      // four.songId = smths.id,
      // five.songId = cre.id

      await Promise.all([
        prnce.save(),
        smths.save(),
        cre.save(),
        purple.save(),
        suedehead.save(),
        friday.save(),
        // two.save(),
        // four.save(),
        // five.save(),
      ]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  syncAndSeed,
  db,
  models: {
    Artist,
    Song,
    Track,
    Album,
  },
};
