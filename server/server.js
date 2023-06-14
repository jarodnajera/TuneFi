const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const body_parser = require('body-parser');
const mongoose = require('mongoose');

// Initialize express
const app = express();

// Configure .env
dotenv.config();

// Middleware Setup
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

// Session Setup
const session_middleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
});
app.use(session_middleware);

// Connect to Database
mongoose.connect(process.env.MONGO_URL);
const database = mongoose.connection;
// Failed to connect
database.on('error', (error) => console.log(error));
database.once('open', () => console.log('Connected to database!'));

// Routes
const auth = require('./routes/Auth');
const artist = require('./routes/Artist');
const search = require('./routes/Search');
const song = require('../server/routes/Song');
// Use Routes
app.use('/api/auth/', auth);
app.use('/api/artist/', artist);
app.use('/api/search/', search);
app.use('/api/song/', song);

// Check if session has been authenticated
app.get('/', (req, res, next) => {
  if (req.session.authenticated) {
    res.json({ status: true, screen_name: req.session.screen_name });
    next();
  }
  else {
    res.json({ status: false });
  }
})


// Server Listen
app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT}`);
});
