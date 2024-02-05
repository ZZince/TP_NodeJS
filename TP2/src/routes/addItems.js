const express = require('express');
const router = express.Router();
const { updateWatchlist } = require('../controllers/updateWatchlists');

router.put('/:id', async (req, res) => {
    try {
        const updatedWatchlist = await updateWatchlist(req.params.id, req.body);
        res.status(200).json(updatedWatchlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;