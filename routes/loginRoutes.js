import express from "express";
import { registrarUsuario, autenticarUsuario } from "../controllers/loginController.js";

const router = express.Router();
router.post("/crear-cuenta", registrarUsuario);
router.post("/login", autenticarUsuario);

export default router