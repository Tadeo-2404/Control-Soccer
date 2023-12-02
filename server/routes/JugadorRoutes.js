import { crear_jugador, buscar_jugador, editar_jugador } from "../controllers/JugadorController.js";
import express from "express";
const router = express.Router();

router.post('/crear', crear_jugador);

router.put('/editar', editar_jugador);

router.get('/buscar', buscar_jugador);

export default router;