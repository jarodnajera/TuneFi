const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  data: {
    type: Buffer,
    required: true
  }
});


  

const ArtistSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String
  },
  screen_name: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  songs: [SongSchema]

});

module.exports = mongoose.model('Artist', ArtistSchema);