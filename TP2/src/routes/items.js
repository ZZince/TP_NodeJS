const express = require('express');
const router = express.Router();
const { createItem } = require('../controllers/createItem');

router.post('/', async (req, res) => {
    try {
        const item = await createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});

module.exports = router;