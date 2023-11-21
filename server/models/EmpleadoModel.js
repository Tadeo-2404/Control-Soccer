import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Empleado extends Model {};

Empleado.init({
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Empleado',
    modelName: 'Empleado'
})

export default Empleado;