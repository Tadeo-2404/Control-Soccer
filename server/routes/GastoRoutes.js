import { crear_gasto, mostrar_gastos } from "../controllers/GastoController.js";
import express from "express";
const router = express.Router();

router.post('/crear', crear_gasto);

router.put('/mostrar', mostrar_gastos);

export default router;