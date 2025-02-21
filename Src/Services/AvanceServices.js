const Avance = require("../Model/AvanceModel"); // Assurez-vous que le chemin est correct

const getAvanceServices = async () => {
    try {
        return await Avance.findAll();
    } catch (error) {
        console.error('Error fetching Avance:', error);
        throw error; 
    }
};

const addAvanceServices = async (body) => {
    try {
        return await Avance.create(body);
    } catch (error) {
        console.error("Error adding Avance:", error);
        throw error; 
    }
};

const getAvanceByIdServices = async (id_avance) => {
    try {
        return await Avance.findOne({ where: { id_avance } });
    } catch (error) {
        console.error("Error fetching Avance by ID:", error);
        throw error;
    }
};

const updateAvanceService = async (id_avance, body) => {
    try {
        const [updated] = await Avance.update(body, {
            where: { id_avance },
        });
        return updated ? await Avance.findByPk(id_avance) : null;
    } catch (error) {
        console.error("Error updating Avance:", error);
        throw error;
    }
};

const deleteAvanceService = async (id_avance) => {
    try {
        const deleted = await Avance.destroy({
            where: { id_avance }
        });
        return deleted; 
    } catch (error) {
        console.error("Error deleting Avance:", error);
        throw error; 
    }
};

module.exports = {
    getAvanceServices,
    addAvanceServices,
    getAvanceByIdServices,
    updateAvanceService,
    deleteAvanceService
};