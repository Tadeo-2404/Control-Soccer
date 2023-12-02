import { crear_partido, editar_partido, mostrar_partido } from "../controllers/PartidoController.js";
import express from "express";
const router = express.Router();

router.post('/crear', crear_partido);

router.put('/editar', editar_partido);

router.get('/mostrar', mostrar_partido)

export default router;