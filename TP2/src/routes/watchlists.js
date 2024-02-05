const express = require('express');
const router = express.Router();
const { createWatchlist } = require('../controllers/createWatchlists');

router.post('/', async (req, res) => {
    try {
        const newWatchlist = await createWatchlist(req.body);
        res.status(201).json(newWatchlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;