import express from "express"
import { saludar, nuevoCliente, mostrarClientes, mostrarCliente } from "../controllers/controller.js";

const router = express.Router();

router.get("/", saludar)
router.post("/clientes", nuevoCliente);
router.get("/clientes", mostrarClientes);
router.get("/cliente/:id", mostrarCliente)

export default router;