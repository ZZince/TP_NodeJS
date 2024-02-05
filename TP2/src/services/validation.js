const { Validator } = require('jsonschema');
const v = new Validator();

const userSchema = {
    "id": "userSchema",
    "type": "object",
    "properties": {
        "id": { "type": "string" },
        "nom": { "type": "string" },
        "prenom": { "type": "string" },
        "email": { "type": "string", "format": "email" },
        "infosPersonnelles": {
            "type": "object",
            "properties": {
                "adresse": { "type": "string" },
                "telephone": { "type": "string" }
            },
            "required": ["adresse", "telephone"]
        },
        "dateInscription": { "type": "string", "format": "date-time" }
    },
    "required": ["id", "nom", "email", "infosPersonnelles"],
    "additionalProperties": false
};

const itemSchema = {
    "id": "itemSchema",
    "type": "object",
    "properties": {
        "id": { "type": "string" },
        "titre": { "type": "string" },
        "type": { "type": "string", "enum": ["film", "série"] },
        "description": { "type": "string" },
        "dateSortie": { "type": "string", "format": "date-time" },
        "genres": {
            "type": "array",
            "items": { "type": "string" }
        }
    },
    "required": ["id", "titre", "type"],
    "additionalProperties": false
};



const watchlistSchema = {
    "id": "watchlistSchema",
    "type": "object",
    "properties": {
        "id": { "type": "string" },
        "userId": { "type": "string" },
        "items": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "itemId": { "type": "string" },
                    "status": { "type": "string", "enum": ["A voir", "En cours", "Terminé", "Abandonné"] },
                    "dateAjout": { "type": "string", "format": "date-time" },
                    "notePersonnelle": { "type": "string" }
                },
                "required": ["itemId", "status"]
            }
        },
        "estFavori": { "type": "boolean" },
        "partages": {
            "type": "array",
            "items": { "type": "string" }
        },
        "description": { "type": "string" }
    },
    "required": ["id", "userId", "items"],
    "additionalProperties": false
};

v.addSchema(userSchema, '/User');
v.addSchema(itemSchema, '/Item');
v.addSchema(watchlistSchema, '/Watchlist');

const validateEntity = (entity, schema) => {
    return v.validate(entity, schema);
};

module.exports = {
    validateUser: (userData) => validateEntity(userData, userSchema),
    validateItem: (itemData) => validateEntity(itemData, itemSchema),
    validateWatchlist: (watchlistData) => validateEntity(watchlistData, watchlistSchema)
};