const { updateOne } = require('../services/db/crud');
const { validateWatchlist } = require('../services/validation');

async function updateWatchlist(id, newItem) {
    if (validateWatchlist.errors.length) {
        throw new Error('Invalid item data');
    }
    return await updateOne('watchlists', { id }, { $push: { items: newItem } });
}

module.exports = { updateWatchlist };