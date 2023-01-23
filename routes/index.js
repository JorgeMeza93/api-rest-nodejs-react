import express from "express"
import { saludar, nuevoCliente, mostrarCliente } from "../controllers/controller.js";

const router = express.Router();

router.get("/", saludar)
router.post("/clientes", nuevoCliente);
router.get("clientes", mostrarCliente);

export default router;