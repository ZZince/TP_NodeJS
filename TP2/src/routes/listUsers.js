const express = require('express');
const router = express.Router();
const { find } = require('../services/db/crud');

router.get('/', async (req, res) => {
    try {
        const users = await find('users', {});
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
});

module.exports = router;