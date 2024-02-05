const { findOne, updateOne } = require('../services/db/crud');

async function updateItemStatus(watchlistId, itemId, newStatus) {
    const watchlist = await findOne('watchlists', { id: watchlistId });
    if (!watchlist) {
        throw new Error('Watchlist not found');
    }

    const item = watchlist.items.find(item => item.itemId === itemId);
    if (!item) {
        throw new Error('Item not found in watchlist');
    }

    item.status = newStatus;

    return await updateOne('watchlists', { id: watchlistId }, { $set: { items: watchlist.items } });
}

module.exports = { updateItemStatus };