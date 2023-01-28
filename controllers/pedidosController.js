import Pedido from "../models/Pedido.js";

const nuevoPedido = async (req, res, next) => {
    try {
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.json({ mensaje: "Se ha añadido un nuevo pedido" })
    } catch (error) {
        console.log(error);
        next();
    }
}
const mostrarPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedido.find({}).populate("cliente").populate({path: "articulo.producto", model: "productos"});
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }
}
const mostrarPedido = async (req, res, next) => {
    try {
        const {id} = req.params;
        const pedido = await Pedido.findById(id).populate("cliente").populate({ path: "articulo.producto", model: "productos" });
        if(!pedido){
            return res.json({ mensaje: "Pedido no encontrado" })
        }
        res.json(pedido)
    } catch (error) {
        console.log(error);
        next();
    }
}
const actualizarPedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        let pedido = await Pedido.findOneAndUpdate({ _id: id }, req.body, { new: true}).populate("cliente").populate({ path: "articulo.producto", model: "productos" });
        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }
}
const eliminarPedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Pedido.findOneAndDelete({ _id: id});
        res.json({ mensaje: "El pedido se ha eliminado" })
    } catch (error) {
        console.log(error);
        next();
    }
}
export { nuevoPedido, mostrarPedidos, mostrarPedido, actualizarPedido, eliminarPedido }