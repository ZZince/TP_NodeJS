const express = require('express');
const router = express.Router();
const { find } = require('../services/db/crud');

router.get('/user/:userId', async (req, res) => {
    try {
        const watchlists = await find('watchlists', { userId: req.params.userId });
        res.status(200).json(watchlists);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;