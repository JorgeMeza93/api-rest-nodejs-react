import express from "express";
import { obtenerProductos, crearProducto, subirArchivo, mostrarProducto } from "../controllers/productoController.js"

const router = express.Router();

router.get("/productos", obtenerProductos);
router.post("/productos", subirArchivo, crearProducto);
router.get("/productos/:id", mostrarProducto)

export default router;