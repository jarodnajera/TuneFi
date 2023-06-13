const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Artist = require('../models/Artist');
const CommunityPost = require('../models/CommunityPost');
const Event = require('../models/Event');

module.exports = router;

// For getting artist name, bio, and followers
router.get('/id/:artistID', async (req, res, next) => {
    const artist_id = req.params.artistID;
    const screen_name = req.session.screen_name;

    const curr_artist = await Artist.findOne({ screen_name: artist_id });
    const curr_user = await Artist.findOne({ screen_name: screen_name });
    let is_following = false;

    console.log(curr_artist.followers);

    if (curr_artist.followers.some((follower) => follower._id.equals(curr_user._id))) {
        is_following = true;
    }

    console.log(curr_artist);
    console.log(screen_name);
    console.log(is_following);

    if(artist_id == screen_name) {
        res.json({ auth: true, artist_name: curr_artist.screen_name, bio: curr_artist.bio, followers: curr_artist.followers, following: curr_artist.following, is_following: is_following });
    }
    else {
        res.json({ auth: false, artist_name: curr_artist.screen_name, bio: curr_artist.bio, followers: curr_artist.followers, following: curr_artist.following, is_following: is_following });
    }

    next();
})

// For changing artist name or bio
router.post('/id/:artistID', async (req, res) => {
    const artist_username = req.session.username;
    const new_screen_name = req.body.screen_name;
    const new_bio = req.body.bio;
    console.log(req.body);

    if (new_screen_name && new_bio) {
        req.session.screen_name = new_screen_name;
        await Artist.findOneAndUpdate({ username: artist_username }, { $set: { bio: new_bio, screen_name: new_screen_name } });
    }
    else if (new_screen_name && !new_bio) {
        req.session.screen_name = new_screen_name;
        await Artist.findOneAndUpdate({ username: artist_username }, { $set: { screen_name: new_screen_name } });
    }
    else {
        await Artist.findOneAndUpdate({ username: artist_username }, { $set: { bio: new_bio } });
    }
    
    console.log(req.session);
    res.json({ status: true });
})

// For getting artist community posts
router.get('/id/:artistID/community', async (req, res) => {
    const artist_page = req.params.artistID;
    const posts = await CommunityPost.find({ artist_page: artist_page });
    
    if(posts) {
        res.json(posts);
    }
})

// For adding to artist community posts
router.post('/id/:artistID/community', async (req, res) => {
    const post_text = req.body.text;
    const artist_page = req.params.artistID;
    const user = req.session.screen_name;

    console.log(`Text: ${post_text}`);
    console.log(`Artist Page: ${artist_page}`);
    console.log(`User: ${user}`);

    const new_post = new CommunityPost({
        text: post_text,
        artist_page: artist_page,
        user: user,
        likes: 0,
        replies: []
    })

    await new_post.save();

    res.json({status: true});
})

// For getting artist events
router.get('/id/:artistID/events', async (req, res) => {
    const artist_page = req.params.artistID;
    const events = await Event.find({ artist_page: artist_page });
    
    if(events) {
        if(artist_page == req.session.screen_name) {
            res.json({ auth: true, events: events });
        }
        else {
            res.json({ auth: false, events: events });
        }
    }
})

// For adding to artist events
router.post('/id/:artistID/events', async (req, res) => {
    const title = req.body.title;
    const location = req.body.location;
    const time = req.body.time;
    const date = req.body.date;
    const artist_page = req.params.artistID;

    const new_event = new Event({
        title: title,
        location: location,
        time: time,
        date: date,
        artist_page: artist_page
    })

    console.log(new_event);

    await new_event.save();

    res.json({ status: true });
})

// For handling follow
router.post('/id/:artistID/follow', async (req, res) => {
    const curr_user = req.session.screen_name;
    const curr_artist = req.params.artistID;

    const follower = await Artist.findOne({ screen_name: curr_user });
    const follow = await Artist.findOne({ screen_name: curr_artist });

    // Add artist to user following
    await Artist.findOneAndUpdate({ screen_name: curr_user }, { $push: { following: follow } });

    // Add follower to artist
    await Artist.findOneAndUpdate({ screen_name: curr_artist }, { $push: { followers: follower } });

    console.log('Follow complete');
    res.json({ status: true});
})

// For handling unfollow
router.delete('/id/:artistID/follow', async (req, res) => {
    const curr_user = req.session.screen_name;
    const curr_artist = req.params.artistID;

    const follower = await Artist.findOne({ screen_name: curr_user });
    const follow = await Artist.findOne({ screen_name: curr_artist });

    const follower_id = new mongoose.Types.ObjectId(follower._id);
    const follow_id = new mongoose.Types.ObjectId(follow._id);

    // Remove artist from user following
    await Artist.findOneAndUpdate({ screen_name: curr_user }, { $pull: { following: follow_id } });

    // Remove user from artist followers
    await Artist.findOneAndUpdate({ screen_name: curr_artist }, { $pull: { followers: follower_id } });

    console.log('Unfollow complete');
    res.json({ status: true});
})

// For handling likes/unlikes
router.post('/likes', async (req, res) => {
    const like_action = req.body.likes;
    const post_id = req.body.post_id;

    console.log(`Like action: ${like_action}`);
    console.log(`Post ID: ${post_id}`);

    if (like_action == 'inc') {
        await CommunityPost.findByIdAndUpdate(post_id, { $inc: { likes: 1 } });
    }
    else {
        await CommunityPost.findByIdAndUpdate(post_id, { $dec: { likes: 1 } });
    }

    res.json({ status: true });
})