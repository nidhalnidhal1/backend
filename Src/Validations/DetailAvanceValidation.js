const joi = require("joi");

const createDetailAvanceSchema = joi.object({
    id_avance: joi.number().integer().required(),
    modeReglement: joi.string().optional(),
    numPiece: joi.number().integer().optional(),
    banque: joi.string().optional()
}).unknown(true);

const findIdDetailAvanceSchema = joi.object({
    id_detailAvance: joi.string().required()
});

exports.createDetailAvanceSchema = createDetailAvanceSchema;
exports.findIdDetailAvanceSchema = findIdDetailAvanceSchema;