import { crear_mantenimiento, editar_mantenimiento, mostrar_mantenimiento, cerrar_mantenimiento } from "../controllers/OrdenesDeMantinimientoController.js";
import express from "express";
const router = express.Router();

router.post('/crear', crear_mantenimiento);

router.put('/editar', editar_mantenimiento);

router.get('/mostrar', mostrar_mantenimiento)

export default router;