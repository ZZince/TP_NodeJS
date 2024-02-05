const { getCollection } = require('./connection');

async function findOne(collectionName, query, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.findOne(query, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
        console.log(e);
        throw e;
    }
}

async function find(collectionName, query, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.find(query, options).toArray();
        return result;
    } catch (e) {
        console.error(`Error executing find with query: ${query}`);
        console.error(e);
        throw e;
    }
}

async function insertOne(collectionName, doc) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertOne(doc);
        return result;
    } catch (e) {
        console.error(`Error executing insertOne with document: ${doc}`);
        console.error(e);
        throw e;
    }
}

async function insertMany(collectionName, docs) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertMany(docs);
        return result;
    } catch (e) {
        console.error(`Error executing insertMany with documents: ${docs}`);
        console.error(e);
        throw e;
    }
}

async function updateOne(collectionName, filter, update, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateOne(filter, update, options);
        return result;
    } catch (e) {
        console.error(`Error executing updateOne with filter: ${filter} and update: ${update}`);
        console.error(e);
        throw e;
    }
}

async function updateMany(collectionName, filter, update, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateMany(filter, update, options);
        return result;
    } catch (e) {
        console.error(`Error executing updateMany with filter: ${filter} and update: ${update}`);
        console.error(e);
        throw e;
    }
}

async function replaceOne(collectionName, filter, replacement, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.replaceOne(filter, replacement, options);
        return result;
    } catch (e) {
        console.error(`Error executing replaceOne with filter: ${filter} and replacement: ${replacement}`);
        console.error(e);
        throw e;
    }
}

async function deleteOne(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteOne(filter, options);
        return result;
    } catch (e) {
        console.error(`Error executing deleteOne with filter: ${filter}`);
        console.error(e);
        throw e;
    }
}

async function deleteMany(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(filter, options);
        return result;
    } catch (e) {
        console.error(`Error executing deleteMany with filter: ${filter}`);
        console.error(e);
        throw e;
    }
}

module.exports = {
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    replaceOne,
    deleteOne,
    deleteMany,
    find,
    findOne,
};