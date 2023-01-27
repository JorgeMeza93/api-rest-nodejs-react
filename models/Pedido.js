import mongoose from "mongoose";

const Schema = mongoose.Schema;
const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: "Cliente"
    },
    articulo: [{
        producto: {
            type: Schema.ObjectId,
            ref: "Producto"
        },
        cantidad: Number
    }],
    total: {
        type: Number
    }
})
const Pedidos = mongoose.model("pedidos", pedidosSchema);
export default Pedidos;