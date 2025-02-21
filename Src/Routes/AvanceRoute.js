const express = require("express");
const { validateParams, validateBody } = require("../Middleware/Validation");
const { findIdAvanceSchema, createAvanceSchema } = require("../Validations/AvanceValidation");
const router = express.Router();
const {
    getAvance,
    addAvance,
    getAvanceById,
    updateAvance,
    deleteAvance
} = require("../Controllers/AvanceController");

router.get("/", getAvance);
router.post("/", validateBody(createAvanceSchema), addAvance);
router.get("/:id_avance", validateParams(findIdAvanceSchema), getAvanceById);
router.put("/:id_avance", validateParams(findIdAvanceSchema), validateBody(createAvanceSchema), updateAvance);
router.delete("/:id_avance", validateParams(findIdAvanceSchema), deleteAvance);

module.exports = router;