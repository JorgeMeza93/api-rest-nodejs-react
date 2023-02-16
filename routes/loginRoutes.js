import express from "express";
import { registrarUsuario, autenticarUsuario } from "../controllers/loginController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();
router.post("/crear-cuenta", auth, registrarUsuario);
router.post("/login", autenticarUsuario);

export default router