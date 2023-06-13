const express = require('express');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const router = express.Router();

const Artist = require('../models/Artist');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  service: 'yahoo',
  auth: {
    user: 'jarodnajera@yahoo.com',
    pass: 'nayoleofzokbfuhz'
  },
  debug: false,
  logger: true
});

module.exports = router;

// User Signup
router.post('/signup', async (req, res) => {
  // Get req body
  const { username, screen_name, email, password } = req.body;

  console.log(`Username: ${username}`);
  console.log(`Screen Name: ${screen_name}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);

  // Check if user already exists
  let user = await Artist.findOne({ username });

  // User exists
  if (user) {
    console.log('Failed to make user! Username already exists!');
    return res.json({ message: 'User already exists', status: false });
  }
    
  const saltRounds = 10
  const hashPass = await bcrypt.hash(password, saltRounds);
  
  // Make new user
  user = new Artist({
    username: username,
    screen_name: screen_name,
    email: email,
    password: hashPass,
    bio: 'Click "Edit Profile" to change your bio!',
    followers: [],
    following: [],
  });

  try {
    req.session.authenticated = true;
    req.session.screen_name = screen_name;
    req.session.username = username;
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
  const { username, password, tfa } = req.body;

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
  bcrypt.compare(password, user.password, function(err) {
    if (err){
      // handle error
      console.log('Failed to login! Incorrect password!');
      return res.json({ message: 'Incorrect password', status: false });
    }
  });

  if (tfa != req.session.tfa) {
    console.log('Failed to login! Incorrect 2FA code!');
    return res.json({ message: 'Incorrect 2FA code', status: false });
  }
    
  // Login successful
  req.session.authenticated = true;
  req.session.screen_name = user.screen_name;
  req.session.username = user.username;
  console.log(req.session);
  console.log(user.screen_name);
  res.json({ message: 'Logged in', status: true, screen_name: user.screen_name});
});

// User Logout
router.get('/logout', (req, res) => {
  // Clear and destroy session
  console.log('Session destroyed');
  req.session.destroy();
  res.send({message: 'Logged out', status: true});
})

// 2FA
router.post('/tfa', async (req, res) => {
  // Generate random code for the session
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  req.session.tfa = code;

  // Send code to user
  const username = req.body.username;

  const user = await Artist.findOne({ username: username });
  console.log(username);
  console.log(user);

  const user_email = user.email;

  const mail_options = {
    from: 'jarodnajera@yahoo.com',
    to: user_email,
    subject: 'Your 2FA Code from TuneFi',
    text: `Your code is: ${code}`
  }

  transporter.sendMail(mail_options, (error, info) => {
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent!', info.response);
    }
  })

  res.json({ status: true })
})