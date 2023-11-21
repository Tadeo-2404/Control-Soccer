import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Concepto extends Model {};

Concepto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    importe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'Concepto',
    modelName: 'Concepto'
})

export default Concepto;