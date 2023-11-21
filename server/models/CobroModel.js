import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Cobro extends Model {};

Cobro.init({
    folio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_empleado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_deudor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_cobro_concepto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'Cobro',
    modelName: 'Cobro'
})

export default Cobro;