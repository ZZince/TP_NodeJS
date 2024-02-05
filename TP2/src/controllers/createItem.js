const { insertOne } = require('../services/db/crud');
const { validateItem } = require('../services/validation');

async function createItem(itemData) {
    const validation = validateItem(itemData);
    if (validation.errors.length) {
        throw new Error('Invalid item data');
    }
    return await insertOne('items', itemData);
}

module.exports = { createItem };