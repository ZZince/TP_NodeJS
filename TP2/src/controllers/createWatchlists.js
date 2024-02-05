const { insertOne } = require('../services/db/crud');
const { validateWatchlist } = require('../services/validation');

async function createWatchlist(watchlistData) {
    const validation = validateWatchlist(watchlistData);
    if (validation.errors.length) {
        throw new Error('Invalid watchlist data');
    }
    return await insertOne('watchlists', watchlistData);
}

module.exports = { createWatchlist };