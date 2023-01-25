import express from "express";
import { obtenerProductos, crearProducto, subirArchivo } from "../controllers/productoController.js"

const router = express.Router();

router.get("/productos", obtenerProductos)
router.post("/productos", subirArchivo, crearProducto)


export default router;