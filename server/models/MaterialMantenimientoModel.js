import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class MaterialMantenimiento extends Model {};

MaterialMantenimiento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_mantenimiento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_concepto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    timestamps: false,
    tableName: 'MaterialMantenimiento',
    modelName: 'MaterialMantenimiento'
})

export default MaterialMantenimiento;