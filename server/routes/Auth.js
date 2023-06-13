const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const Artist = require('../models/Artist');

module.exports = router;

// User Signup
router.post('/signup', async (req, res) => {
  // Get req body
  const { username, screen_name, password } = req.body;
  const session = req.session;

  console.log(`Username: ${username}`);
  console.log(`Screen Name: ${screen_name}`);
  console.log(`Password: ${password}`);

  // Check if user already exists
  let user = await Artist.findOne({ username });

  // User exists
  if (user) {
    console.log('Failed to make user! Username already exists!');
    return res.json({ message: 'User already exists', status: false });
  }
    
  // Make new user
  user = new Artist({
    username: username,
    screen_name: screen_name,
    password: password
  });

  try {
    session.authenticated = true;
    await user.save();
    res.json({ message: 'Registered successfully', status: true });
  }
  catch (error) {
    console.log(error);
  }
})

// User Login
router.post('/login', async (req, res) => {
  // Get req body
  const { username, password } = req.body;
  const session = req.session;

  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);

  // Check if user exists
  const user = await Artist.findOne({ username });

  // User doesn't exist
  if (!user) {
    console.log('Failed to login! Invalid username!');
    return res.json({ message: 'Invalid username', status: false });
  }
  // Incorrect password
  else if (user.password !== password) {
    console.log('Failed to login! Incorrect password!');
    return res.json({ message: 'Incorrect password', status: false });
  }
    
  // Login successful
  session.authenticated = true;
  session.user = user.screen_name;
  res.json({ message: 'Logged in', status: true});
});

// User Logout
router.get('/logout', (req, res) => {
  // Clear and destroy session
  console.log('Session destroyed');
  req.session.destroy();
  res.send({message: 'Logged out', status: true});
})