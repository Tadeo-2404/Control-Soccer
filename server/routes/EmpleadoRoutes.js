import { crear_empleado, buscar_empleado, editar_empleado } from "../controllers/EmpleadoController.js";
import express from "express";
const router = express.Router();

router.post('/crear', crear_empleado);

router.put('/editar', editar_empleado);

router.get('/buscar', buscar_empleado);

export default router;