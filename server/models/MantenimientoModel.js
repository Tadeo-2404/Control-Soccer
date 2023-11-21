import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Mantenimiento extends Model {};

Mantenimiento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    instalacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_material_mantenimiento: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Mantenimiento',
    modelName: 'Mantenimiento'
})

export default Mantenimiento;