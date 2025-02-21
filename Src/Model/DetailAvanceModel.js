const { DataTypes } = require("sequelize");
const db = require("../conx/db");

const DetailAvance = db.define("DetailAvance", { // Renommé pour correspondre à la table
    id_detailAvance: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    id_avance: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    modeReglement: { 
        type: DataTypes.STRING,
        allowNull: true 
    },
    numPiece: { 
        type: DataTypes.INTEGER,
        allowNull: true 
    },
    banque: { 
         type: DataTypes.STRING,
        allowNull: true 
    }
}, {
    tableName: "detailavance",
    timestamps: false,
    freezeTableName: true
});

module.exports = DetailAvance;