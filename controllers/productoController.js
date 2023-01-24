import Producto from "../models/Producto.js"

const crearProducto = async (req, res) => {
    const producto = new Producto(req.body);
    try {
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

export { crearProducto, obtenerProductos }