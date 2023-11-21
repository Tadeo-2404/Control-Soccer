import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Convocados extends Model {};

Convocados.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_partido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_jugador: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'Convocados',
    modelName: 'Convocados'
})

export default Convocados;