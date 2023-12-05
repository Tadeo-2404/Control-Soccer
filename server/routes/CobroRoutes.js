import { crear_cobro, mostrar_cobro } from "../controllers/CobroController.js";
import express from "express";
const router = express.Router();

router.post('/crear', crear_cobro);

router.get('/mostrar', mostrar_cobro)

export default router;