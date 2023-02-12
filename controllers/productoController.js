import Producto from "../models/Producto.js";
import multer from "multer";
import path from "path";
import { generarID } from "../helpers/tokens.js"


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads")
    },
    filename: function(req, file, cb){
        cb(null, "pipo" + generarID() + path.extname(file.originalname) )
    },
})


const upload = multer({ 
    storage,
    fileFilter: function (req, file, cb) {
        var typeArray = file.mimetype.split('/');
        var fileType = typeArray[1];
        if (fileType == 'jpg' || fileType == 'png' || fileType == "jpeg") {
          return cb(null, true);
        } else {
          return cb(null, false)
        }
      },
      limits: { fieldSize: 10 * 1024 * 1024 }
    }).single("imagen");

const crearProducto = async (req, res, next) => {
    const producto = new Producto(req.body);
    console.log(req.headers)
    
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
        next()
    }
}
const obtenerProductos = async(req, res) => {
    try {
        const productos = await Producto.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }
}
const subirArchivo = (req, res, next) => {
    upload(req, res, function(error){
        if(error){
            res.json({ mensaje: error })
        }
        return next();
    })
}
const mostrarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);
        if(! producto){
            return res.json({ mensaje: "El producto no existe" });
        }
        res.json(producto)
    } catch (error) {
        
    }
}
const actualizarProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        let productoAnterior = await Producto.findById(id);
        let nuevoProducto = req.body;
        if(req.file){
            nuevoProducto.imagen = req.file.filename
        }
        else{
            console.log("imagen ya existente");
            nuevoProducto.imagen = productoAnterior.imagen;
        }
        let producto = await Producto.findOneAndUpdate({ _id: req.params.id }, nuevoProducto, {
            new: true
        });
        res.json(producto)
    } catch (error) {
        console.log(error);
        next();
    }
}
const eliminarProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Producto.findByIdAndDelete({ _id: id });
        res.json({ mensaje: "El producto se ha eliminado" })
    } catch (error) {
        console.log(error);
        next();
    }
}
const buscarProducto = async(req, res, next) => {
    try {
        const { query } = req.params;
        const producto = await Producto.find({ nombre: new RegExp(query, "i") });
        res.json(producto);
    } catch (error) {
        console.log(error);
        next();
    }
}
export { crearProducto, obtenerProductos, subirArchivo, mostrarProducto, actualizarProducto, eliminarProducto, buscarProducto }