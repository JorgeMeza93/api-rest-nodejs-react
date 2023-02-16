import express from "express";
import { nuevoPedido, mostrarPedidos, mostrarPedido, actualizarPedido, eliminarPedido } from "../controllers/pedidosController.js";
import auth from "../middlewares/auth.js"

const router = express.Router();
router.post("/pedidos/nuevo/:idCliente", auth, nuevoPedido);
router.get("/pedidos", auth, mostrarPedidos);
router.get("/pedidos/:id", auth, mostrarPedido);
router.put("/pedidos/:id", auth, actualizarPedido);
router.delete("/pedidos/:id", auth, eliminarPedido);

export default router;