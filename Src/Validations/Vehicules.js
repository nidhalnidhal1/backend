const joi = require("joi");

const createVehiculesSchema = joi.object({
    num_immatriculation: joi.string().min(1).max(20).required(),
    n_serie_du_type: joi.string().min(1).max(30).required(),
    constructeur: joi.string().min(1).max(50).required(),
    type_constructeur: joi.string().min(1).max(50).required(),
    type_commercial: joi.string().min(1).max(50).required(),
    carrosserie: joi.number().integer().min(1).required(),
    energie: joi.string().valid('Essence', 'Diesel', 'Electric', 'Hybrid').required(),
    puissance_fiscale: joi.number().min(0).required(),
    nbr_places: joi.number().integer().min(1).required(),
    cylindree: joi.number().min(0).required(),
    num_certificat: joi.string().min(1).max(20).required(),
    lieu_certificat: joi.string().min(1).max(50).required(),
    date_certificat: joi.date().iso().required(),
    prix_jour: joi.number().positive().required(), // Ensure it's a positive number
    id_categorie: joi.number().integer().min(1).required(),
}).unknown(true);

const findIdVehiculesSchema = joi.object({
    id_vehicule: joi.string().min(1).required()
});

// Exporting both schemas
module.exports = {
    findIdVehiculesSchema,
    createVehiculesSchema
};