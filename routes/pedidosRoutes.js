import express from "express";
import { nuevoPedido, mostrarPedidos, mostrarPedido, actualizarPedido } from "../controllers/pedidosController.js";

const router = express.Router();
router.post("/pedidos", nuevoPedido);
router.get("/pedidos", mostrarPedidos);
router.get("/pedidos/:id", mostrarPedido);
router.put("/pedidos/:id", actualizarPedido);

export default router;