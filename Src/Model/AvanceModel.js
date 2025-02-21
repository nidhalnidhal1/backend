const { DataTypes } = require("sequelize");
const db = require("../conx/db");

const Avance = db.define("Avance", {
    id_avance: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    montant: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    },
    id_client: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    id_contrat: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
}, {
    tableName: "avance",
    timestamps: false,
    freezeTableName: true
});

module.exports = Avance;