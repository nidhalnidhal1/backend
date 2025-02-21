const {
    getAvanceServices,
    addAvanceServices,
    getAvanceByIdServices,
    updateAvanceService,
    deleteAvanceService
} = require("../Services/AvanceServices");

const handleResponse = (res, statusCode, message, data) => {
    res.status(statusCode).json({
        message: message,
        data: data
    });
};


const getAvance = async (req, res) => {
    try {
        const data = await getAvanceServices();
        return handleResponse(res, data.length > 0 ? 200 : 404, data.length > 0 ? "Avance retrieved successfully" : "No Contrat found", data);
    } catch (error) {
        return handleResponse(res, 500, "An error occurred while retrieving Avance", { error: error.message });
    }
};

const addAvance = async (req, res) => {
    console.log("Received body:", req.body); 
    try {
        const data = await addAvanceServices(req.body);
        return handleResponse(res, 201, "Avance added successfully", data);
    } catch (error) {
        console.error("Error adding Avance:", error);
        return handleResponse(res, 500, "An error occurred while adding Avance", { error: error.message });
    }
};

const getAvanceById = async (req, res) => {
    try {
        const { id_avance  } = req.params;
        console.log("Recherche du Avance avec ID:", id_avance ); // Ajoute cette ligne

        const data = await getAvanceByIdServices(id_avance );
        if (!data) {
            return handleResponse(res, 404, "Avance non trouvé. Veuillez vérifier le numéro.");
        }
        return handleResponse(res, 200, "Avance récupéré avec succès", data);
    } catch (error) {
        return handleResponse(res, 500, "Erreur lors de la récupération du Avance", { error: error.message });
    }
};

const updateAvance = async (req, res) => {
    try {
        const { id_avance } = req.params;
        const updatedAvance = await updateAvanceService(id_avance, req.body);
        return handleResponse(res, updatedAvance ? 200 : 404, updatedAvance ? "Avance updated successfully" : "Avance not found", updatedAvance);
    } catch (error) {
        return handleResponse(res, 500, "An error occurred while updating Avance", { error: error.message });
    }
};
const deleteAvance = async (req, res) => {
    try {
        const { id_avance } = req.params;
        const avance = await getAvanceByIdServices(id_avance);
        if (!avance) {
            return handleResponse(res, 404, "Avance not found");
        }
        
        const result = await deleteAvanceService(id_avance);
        if (result === 0) {
            return handleResponse(res, 404, "Avance not found or already deleted");
        }

        return handleResponse(res, 200, "Avance deleted successfully", avance);
    } catch (error) {
        console.error("Error deleting Avance:", error);
        return handleResponse(res, 500, "An error occurred while deleting Avance", { error: error.message });
    }
};
module.exports = {
    getAvance,
    addAvance,
    getAvanceById,
    updateAvance,
    deleteAvance
};