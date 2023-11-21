import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Materiales extends Model {};

Materiales.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidad_medida: {
        type: DataTypes.STRING,
        allowNull: false
    },
    costo: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    existencia: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Materiales',
    modelName: 'Materiales'
})

export default Materiales;