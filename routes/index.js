import express from "express"
import { saludar, nuevoCliente, mostrarClientes, mostrarCliente, actualizarCliente, eliminarCliente } from "../controllers/controller.js";
import auth from "../middlewares/auth.js"

const router = express.Router();

router.get("/", saludar)
router.post("/clientes", nuevoCliente);
router.get("/clientes", auth, mostrarClientes);
router.get("/cliente/:id", mostrarCliente);
router.put("/cliente/:id", actualizarCliente);
router.delete("/cliente/:id", eliminarCliente);

export default router;