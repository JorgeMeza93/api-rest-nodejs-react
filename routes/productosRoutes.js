import express from "express";
import { obtenerProductos, crearProducto } from "../controllers/productoController.js"

const router = express.Router();

router.get("/productos", obtenerProductos)
router.post("/productos", crearProducto)


export default router;