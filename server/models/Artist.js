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
    bio: {
        required: true,
        type: String
    },
    followers: [{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }],
    following: [{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }],
});

module.exports = mongoose.model('Artist', ArtistSchema);