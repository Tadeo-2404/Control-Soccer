import { crear_material, editar_materiales, mostrar_materiales } from "../controllers/MaterialController.js";
import express from "express";
const router = express.Router();

router.post('/crear', crear_material);

router.put('/editar', editar_materiales);

router.get('/mostrar', mostrar_materiales)

export default router;