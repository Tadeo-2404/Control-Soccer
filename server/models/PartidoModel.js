import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Partido extends Model {};

Partido.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    rival: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sede: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_convocados: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'Partido',
    modelName: 'Partido'
})

export default Partido;