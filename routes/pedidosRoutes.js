import express from "express";
import { nuevoPedido } from "../controllers/pedidosController.js";

const router = express.Router();
router.post("/pedidos", nuevoPedido);

export default router;