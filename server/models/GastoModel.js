import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Gasto extends Model {};

Gasto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_receptor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    importe_total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'Gasto',
    modelName: 'Gasto'
})

export default Gasto;