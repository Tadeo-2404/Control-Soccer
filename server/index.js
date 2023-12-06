import express from "express";
import sequelize from "./db/db.js";
import dotenv from "dotenv";
import { Empleado, Cobro, Concepto, ConceptosCobro, Materiales, Mantenimiento, MaterialMantenimiento, Gasto, Jugador, Convocados, Partido } from "./db/associations.js"
import JugadorRoutes from "./routes/JugadorRoutes.js";
import EmpleadoRoutes from "./routes/EmpleadoRoutes.js";
import CobroRoutes from "./routes/CobroRoutes.js";
import GastoRoutes from "./routes/GastoRoutes.js";
import MaterialesRoutes from "./routes/MaterialesRoutes.js";
import PartidoRoutes from "./routes/PartidoRoutes.js";
import OrdenDeMantenimientoRoutes from "./routes/OrdenDeMantenimientoRoutes.js"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config(); //usar env vars
const port = process.env.port || 3000

try {
    await sequelize.authenticate().then(() =>  console.log('DB Connected'));
    await sequelize.sync({ alter: true }).then(() => console.log('Tablas creadas exitosamente')); //sincronizar las tablas
} catch (error) {
    console.log(error)
} 
 
app.use('/jugador', JugadorRoutes);
app.use('/empleado', EmpleadoRoutes);
app.use('/cobro', CobroRoutes);
app.use('/gasto', GastoRoutes);
app.use('/materiales', MaterialesRoutes);
app.use('/partido', PartidoRoutes);
app.use('/orden', OrdenDeMantenimientoRoutes);

app.listen(port,  () => {
    console.log(`App listening on port ${port}`)
})

