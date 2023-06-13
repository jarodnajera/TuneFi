const express = require('express');
const router = express.Router();
const multer = require('multer');

const Artist = require('../models/Artist');

const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

module.exports = router;

router.post('/upload', upload.single('song'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).send('No file uploaded.');
      return;
    }
    
    const { originalname, path } = req.file;
    const file = fs.readFileSync('./' + path);
    const newSong = {
      name: originalname,
      data: file,
    };
    console.log(newSong);
    // const artistUsername = req.body.artistUsername; // Assuming the artist's username is sent in the request body
    const artistUsername = "safeduck"; // Assuming the artist's username is sent in the request body
    
    // Find the artist by username and update their songs array
    const artist = await Artist.findOneAndUpdate(
      { username: artistUsername },
      { $push: { songs: newSong } }
    );
    await artist.save();

    if (!artist) {
      res.status(404).send('Artist not found.');
      return;
    }

    res.send('Song uploaded and added to artist\'s songs.');
  } catch (error) {
    console.error('Error adding song:', error);
    res.status(500).send('Error adding song.');
  }
});