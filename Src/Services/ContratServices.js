const Contrat = require("../Model/ContratModel");

const getContratServices = async () => {
  try {
    return await Contrat.findAll();
  } catch (error) {
    console.error('Error fetching Contrat:', error);
    throw new Error("Database error while fetching contracts");
  }
};

const getLastNumeroContrat = async () => {
  try {
    const lastContrat = await Contrat.findOne({
      order: [['ID_contrat', 'DESC']],
      attributes: ['Numero_contrat']
    });
    return lastContrat ? lastContrat.Numero_contrat : null;
  } catch (error) {
    console.error("Error fetching last Numero_contrat:", error);
    throw new Error("Database error while fetching last contract number");
  }
};

const addContratServices = async (body) => {
  try {
    const lastNumeroContrat = await getLastNumeroContrat();
    let newNumeroContrat;

    if (lastNumeroContrat) {
      const lastNumber = parseInt(lastNumeroContrat.slice(2));
      const nextNumber = lastNumber + 1;
      newNumeroContrat = `AC${nextNumber.toString().padStart(4, '0')}`;
    } else {
      newNumeroContrat = 'AC0071';
    }

    body.Numero_contrat = newNumeroContrat;

    return await Contrat.create(body);
  } catch (error) {
    console.error("Error adding Contrat:", error);
    throw new Error("Database error while adding contract");
  }
};

const getContratByIdServices = async (ID_contrat) => {
  try {
    const contrat = await Contrat.findOne({ where: { ID_contrat } });
    return contrat;
  } catch (error) {
    console.error("Error fetching contrat by ID:", error);
    throw new Error("Database error while fetching contract by ID");
  }
};

const updateContratService = async (ID_contrat, body) => {
  try {
    const [updated] = await Contrat.update(body, {
      where: { ID_contrat },
    });
    return updated ? await Contrat.findByPk(ID_contrat) : null;
  } catch (error) {
    console.error("Error updating Contrat:", error);
    throw new Error("Database error while updating contract");
  }
};

const deleteContratService = async (ID_contrat) => {
  try {
    const deleted = await Contrat.destroy({
      where: { ID_contrat }
    });
    return deleted;
  } catch (error) {
    console.error("Error deleting Contrat:", error);
    throw new Error("Database error while deleting contract");
  }
};

module.exports = {
  getContratServices,
  addContratServices,
  getContratByIdServices,
  updateContratService,
  deleteContratService
};