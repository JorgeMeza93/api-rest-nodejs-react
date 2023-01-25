import Producto from "../models/Producto.js";
import multer from "multer";
import path from "path";
import { generarID } from "../helpers/tokens.js"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads")
    },
    filename: function(req, file, cb){
        cb(null, generarID() + path.extname(file.originalname) )
    }
})
const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true);
    }
    else{
        cb(new Error("Valor no válido"))
    }
}
const upload = multer({ storage }).single("imagen");

const crearProducto = async (req, res) => {
    const producto = new Producto(req.body);
    try {
        if(req.file.filename){
            producto.imagen = req.file.filename
        }
        await producto.save();
        res.json({
            mensaje: "Se agregó un nuevo producto"
        })
    } catch (error) {
        console.log(error);
    }
}
const obtenerProductos = (req, res) => {

}
const subirArchivo = (req, res, next) => {
    upload(req, res, function(error){
        if(error){
            res.json({ mensaje: error })
        }
        return next();
    })
}

export { crearProducto, obtenerProductos, subirArchivo }