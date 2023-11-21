import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class Jugador extends Model {};

Jugador.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    posicion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'Jugador',
    modelName: 'Jugador'
})

export default Jugador;