import { Sequelize, DataTypes, Model } from "sequelize";
import sequelize from "../db/db.js";

class ConceptosCobro extends Model {};

ConceptosCobro.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    folio_cobro: {
        type: DataTypes.STRING,
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
    tableName: 'ConceptosCobro',
    modelName: 'ConceptosCobro'
})

export default ConceptosCobro;