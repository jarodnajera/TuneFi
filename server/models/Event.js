const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema(
    {
        title: {
            required: true,
            type: String
        },
        location: {
            required: true,
            type: String
        },
        time: {
            required: true,
            type: String
        },
        date: {
            required: true,
            type: String
        },
        artist_page: {
            required: true,
            type: String
        }
    }
);

module.exports = mongoose.model('Event', EventSchema);