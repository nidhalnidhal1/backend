const {
    getVehiculesServices,
    addVehiculesServices,
    getVehiculesByIdServices,
    updateVehiculesService,
    deleteVehiculesService
} = require("../Services/VehiculesServices");

const handleResponse = (res, statusCode, message, data = null) => {
    return res.status(statusCode).json({
        statusCode,
        message,
        data,
    });
};

const getVehicules = async (req, res) => {
    try {
        const data = await getVehiculesServices();
        return handleResponse(res, data.length > 0 ? 200 : 404, data.length > 0 ? "Vehicles retrieved successfully" : "No vehicles found", data);
    } catch (error) {
        return handleResponse(res, 500, "An error occurred while retrieving vehicles", { error: error.message });
    }
};

const addVehicules = async (req, res) => {
    console.log("Received body:", req.body); // Log the incoming request body
    try {
        const data = await addVehiculesServices(req.body);
        return handleResponse(res, 201, "Vehicle added successfully", data);
    } catch (error) {
        return handleResponse(res, 500, "An error occurred while adding vehicle", { error: error.message });
    }
};
const getVehiculesById = async (req, res) => {
    const { id_vehicule } = req.params; // Extraction de l'ID
    console.log("ID du véhicule passé :", id_vehicule); // Log de l'ID
    try {
        const vehicle = await getVehiculesByIdServices(id_vehicule);
        console.log("Véhicule trouvé :", vehicle); // Log du véhicule trouvé
        if (!vehicle) {
            return handleResponse(res, 404, "Vehicle not found");
        }
        return handleResponse(res, 200, "Vehicle retrieved successfully", vehicle);
    } catch (error) {
        console.error("Erreur dans la récupération du véhicule :", error);
        return handleResponse(res, 500, "An error occurred while retrieving vehicle", { error: error.message });
    }
};
const updateVehicules = async (req, res) => {
    try {
        const { id_vehicule } = req.params;
        const updatedVehicle = await updateVehiculesService(id_vehicule, req.body);
        return handleResponse(res, updatedVehicle ? 200 : 404, updatedVehicle ? "Vehicle updated successfully" : "Vehicle not found", updatedVehicle);
    } catch (error) {
        return handleResponse(res, 500, "An error occurred while updating vehicle", { error: error.message });
    }
};

const deleteVehicules = async (req, res) => {
    try {
        const { id_vehicule } = req.params;
        const vehicle = await getVehiculesByIdServices(id_vehicule);
        if (!vehicle) {
            return handleResponse(res, 404, "Vehicle not found");
        }
        await deleteVehiculesService(id_vehicule);
        return handleResponse(res, 200, "Vehicle deleted successfully");
    } catch (error) {
        return handleResponse(res, 500, "An error occurred while deleting vehicle", { error: error.message });
    }
};

module.exports = {
    getVehicules,
    addVehicules,
    getVehiculesById,
    updateVehicules,
    deleteVehicules
};
