const { insertOne } = require('../services/db/crud');
const { validateUser } = require('../services/validation');

async function createUser(userData) {
    const validation = validateUser(userData);
    if (validation.errors.length) {
        throw new Error('Invalid user data');
    }
    return await insertOne('users', userData);
}

module.exports = { createUser };