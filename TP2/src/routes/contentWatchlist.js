const express = require('express');
const router = express.Router();
const { findOne } = require('../services/db/crud');

router.get('/:id', async (req, res) => {
    try {
        const watchlist = await findOne('watchlists', { id: req.params.id });
        res.status(200).json(watchlist);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});
module.exports = router;