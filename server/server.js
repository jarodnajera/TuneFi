const express = require('express');
const cors = require('cors');
const session = require('express-session');
const dotenv = require('dotenv');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');
const mongoose = require('mongoose');

// Initialize express
const app = express();

// Routes
const auth = require('../server/routes/Auth');
const song = require('../server/routes/Song');
// Configure .env
dotenv.config();

// Middleware Setup
app.use(cors({origin: 'http://localhost:5173', credentials: true}));
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(cookie_parser());

// Session Setup
app.use(session({
  secret: 'a',
  resave: false,
  saveUninitialized: process.env.SESSION_SECRET
}));

// Connect to Database
mongoose.connect(process.env.MONGO_URL);
const database = mongoose.connection;
// Failed to connect
database.on('error', (error) => console.log(error));
database.once('open', () => console.log('Connected to database!'));

// Use Routes
app.use('/api/auth/', auth);
app.use('/api/song/', song);

// Server Listen
app.listen(process.env.PORT, () => {
  console.log(`Server listening on Port ${process.env.PORT}`);
});
