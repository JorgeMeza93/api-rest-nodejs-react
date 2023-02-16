import express from "express";
import { obtenerProductos, crearProducto, subirArchivo, mostrarProducto, actualizarProducto, eliminarProducto, buscarProducto } from "../controllers/productoController.js";
import auth from "../middlewares/auth.js"

const router = express.Router();

router.get("/productos", auth, obtenerProductos);
router.post("/productos", auth, subirArchivo, crearProducto);
router.get("/productos/:id", auth, mostrarProducto);
router.put("/productos/:id", auth, subirArchivo, actualizarProducto);
router.delete("/productos/:id", auth, eliminarProducto);
router.post("/productos/busqueda/:query", auth, buscarProducto)

export default router;