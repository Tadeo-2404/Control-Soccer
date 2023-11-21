import express from "express";
import sequelize from "./db/db.js";
import dotenv from "dotenv";
import { Empleado, Cobro, Concepto, ConceptosCobro, Materiales, Mantenimiento, MaterialMantenimiento, Gasto, Jugador, Convocados, Partido } from "./db/associations.js"

const app = express();
dotenv.config(); //usar env vars
const port = process.env.port || 8000

try {
    await sequelize.authenticate().then(() =>  console.log('DB Connected'));
    await sequelize.sync({ alter: true }).then(() => console.log('Tablas creadas exitosamente')); //sincronizar las tablas
} catch (error) {
    console.log(error)
} 

app.listen(port,  () => {
    console.log(`App listening on port ${port}`)
})

