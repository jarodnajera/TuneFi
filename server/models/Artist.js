const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('Artist', ArtistSchema);