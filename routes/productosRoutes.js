import express from "express";
import { obtenerProductos, crearProducto, subirArchivo, mostrarProducto, actualizarProducto, eliminarProducto } from "../controllers/productoController.js"

const router = express.Router();

router.get("/productos", obtenerProductos);
router.post("/productos", subirArchivo, crearProducto);
router.get("/productos/:id", mostrarProducto);
router.put("/productos/:id", subirArchivo, actualizarProducto);
router.delete("/productos/:id", eliminarProducto);

export default router;