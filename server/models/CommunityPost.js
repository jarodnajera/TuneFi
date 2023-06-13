const mongoose = require('mongoose');

const CommunityPostSchema = new mongoose.Schema(
    {
        text: {
            required: true,
            type: String
        },
        artist_page: {
            required: true,
            type: String
        },
        user: {
            required: true,
            type: String
        },
        likes: {
            required: true,
            type: Number
        },
        replies: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CommunityPost'
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('CommunityPost', CommunityPostSchema)