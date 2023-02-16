import express from "express"
import { saludar, nuevoCliente, mostrarClientes, mostrarCliente, actualizarCliente, eliminarCliente } from "../controllers/controller.js";
import auth from "../middlewares/auth.js"

const router = express.Router();

router.get("/", auth, saludar)
router.post("/clientes", auth, nuevoCliente);
router.get("/clientes", auth, mostrarClientes);
router.get("/cliente/:id", auth, mostrarCliente);
router.put("/cliente/:id", auth, actualizarCliente);
router.delete("/cliente/:id", auth, eliminarCliente);

export default router;