const Vehicules = require("../Model/VehiculesModel");

const getVehiculesServices = async () => {
    try {
        return await Vehicules.findAll();
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error; // Let the controller handle the error
    }
};

const addVehiculesServices = async (body) => {
    try {
        const exists = await Vehicules.findByPk(body.num_immatriculation);
        if (exists) {
            throw new Error("Le véhicule avec ce numéro d'immatriculation existe déjà.");
        }
        return await Vehicules.create(body);
    } catch (error) {
        console.error("Error adding vehicle:", error);
        throw error; // Let the controller handle the error
    }
};

const getVehiculesByIdServices = async (id_vehicule) => {
    try {
        // Recherche du véhicule par id_vehicule dans la base de données
        const vehicle = await Vehicules.findOne({ where: { id_vehicule } });
        return vehicle; // Retourne le véhicule trouvé
    } catch (error) {
        console.error("Erreur lors de la récupération du véhicule:", error);
        throw error; // Laisse le contrôleur gérer l'erreur
    }
};
const updateVehiculesService = async (id_vehicule, body) => {
    try {
        const [updated] = await Vehicules.update(body, {
            where: { num_immatriculation: id_vehicule },
        });
        return updated ? await Vehicules.findByPk(id_vehicule) : null;
    } catch (error) {
        console.error("Error updating vehicle:", error);
        throw error; // Let the controller handle the error
    }
};

const deleteVehiculesService = async (id_vehicule) => {
    try {
        const deleted = await Vehicules.destroy({
            where: { num_immatriculation: id_vehicule }
        });
        return deleted ? true : false;
    } catch (error) {
        console.error("Error deleting vehicle:", error);
        throw error; // Let the controller handle the error
    }
};

module.exports = {
    getVehiculesServices,
    addVehiculesServices,
    getVehiculesByIdServices,
    updateVehiculesService,
    deleteVehiculesService
};
