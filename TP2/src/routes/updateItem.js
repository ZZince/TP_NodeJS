const express = require('express');
const router = express.Router();
const { updateItemStatus } = require('../controllers/updateItemStatus');

router.put('/:watchlistId/items/:itemId', async (req, res) => {
    try {
        const updatedWatchlist = await updateItemStatus(req.params.watchlistId, req.params.itemId, req.body.status);
        res.status(200).json(updatedWatchlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;