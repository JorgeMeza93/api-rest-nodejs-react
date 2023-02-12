import express from "express";
import { obtenerProductos, crearProducto, subirArchivo, mostrarProducto, actualizarProducto, eliminarProducto, buscarProducto } from "../controllers/productoController.js"

const router = express.Router();

router.get("/productos", obtenerProductos);
router.post("/productos", subirArchivo, crearProducto);
router.get("/productos/:id", mostrarProducto);
router.put("/productos/:id", subirArchivo, actualizarProducto);
router.delete("/productos/:id", eliminarProducto);
router.post("/productos/busqueda/:query", buscarProducto)

export default router;