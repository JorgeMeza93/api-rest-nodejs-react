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

export { nuevoPedido }