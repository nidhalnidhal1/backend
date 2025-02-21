const joi = require("joi");

const createAvanceSchema = joi.object({
  montant: joi.number().precision(2).required(),
  id_contrat: joi.number().integer().required(),
  id_client: joi.number().integer().required(), // Ensure this matches the model
}).unknown(true);

const findIdAvanceSchema = joi.object({
    id_avance : joi.string().required() 
  });

exports.createAvanceSchema = createAvanceSchema;
exports.findIdAvanceSchema = findIdAvanceSchema;