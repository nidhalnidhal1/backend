const { DataTypes } = require("sequelize");
const db = require("../conx/db");

const Contrat = db.define("Contrat", {
    ID_contrat: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    Numero_contrat: { 
        type: DataTypes.STRING(50), 
        allowNull: false, 
        unique: true 
    },
    Date_debut: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    Heure_debut: { 
        type: DataTypes.TIME, 
        allowNull: false 
    },
    Date_retour: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    Heure_retour: { 
        type: DataTypes.TIME, 
        allowNull: false 
    },
    Duree_location: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    Prolongation: { 
        type: DataTypes.INTEGER, 
        defaultValue: 0 
    },
   
    Id_vehicule: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    ID_client: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    Prix_total: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    },
    Piece_garantie: { 
        type: DataTypes.STRING(255) 
    },
    Frais: { 
        type: DataTypes.DECIMAL(10, 2), 
        defaultValue: 0.00 
    }
}, {
    tableName: "contrat",
    timestamps: false,
    freezeTableName: true
});


module.exports = Contrat;