const express = require('express');
const router = express.Router();

const Artist = require('../models/Artist');

module.exports = router;

router.get('/:query', async (req, res) => {
    const query = req.params.query;
    const regex_query = new RegExp(query, 'i');

    console.log(`Query: ${query}`);

    const results = await Artist.find({ screen_name: { $regex: regex_query } });

    console.log(results);

    res.json(results);
})