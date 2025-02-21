const express = require("express");
const { validateParams, validateBody } = require("../Middleware/Validation");
const { findIdDetailAvanceSchema, createDetailAvanceSchema } = require("../Validations/DetailAvanceValidation"); // Assurez-vous que le chemin est correct
const router = express.Router();
const {
    getDetailAvance,
    addDetailAvance,
    getDetailAvanceById,
    updateDetailAvance,
    deleteDetailAvance
} = require("../Controllers/DetailAvanceController"); // Assurez-vous que le chemin est correct

// Routes pour DetailAvance
router.get("/", getDetailAvance); // Récupérer tous les DetailAvance
router.post("/", validateBody(createDetailAvanceSchema), addDetailAvance); // Ajouter un DetailAvance
router.get("/:id_detailAvance", validateParams(findIdDetailAvanceSchema), getDetailAvanceById); // Récupérer un DetailAvance par ID
router.put("/:id_detailAvance", validateParams(findIdDetailAvanceSchema), validateBody(createDetailAvanceSchema), updateDetailAvance); // Mettre à jour un DetailAvance
router.delete("/:id_detailAvance", validateParams(findIdDetailAvanceSchema), deleteDetailAvance); // Supprimer un DetailAvance

module.exports = router;