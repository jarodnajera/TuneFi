const express = require('express');
const router = express.Router();
const multer = require('multer');

const Artist = require('../models/Artist');

const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

module.exports = router;

// const storage = multer.memoryStorage();
// const upload = multer({storage: storage});
router.post('/upload', upload.single('song'), async (req, res) => {
  // file.buffer = req.file;
  console.log('cookie', req.cookies)
  console.log('username', req.session)
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
    const artistUsername = req.session.username; // Assuming the artist's username is sent in the request body
    
    // Find the artist by username and update their songs array
    try{
      await Artist.findOneAndUpdate(
        { username: artistUsername },
        { $push: { songs: newSong } }
      )
    }
    // const artist = 
    // );
    // await artist.save();
    catch{
   
        res.status(404).send('Artist not found.');
        return;

    }

    res.send('Song uploaded and added to artist\'s songs.');
  } catch (error) {
    console.error('Error adding song:', error);
    res.status(500).send('Error adding song.');
  }
});