import mongoose from "mongoose";

const Schema = mongoose.Schema;
const pedidosSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: "clientes"
    },
    articulo: [{
        producto: {
            type: Schema.ObjectId,
            ref: "productos"
        },
        cantidad: Number
    }],
    total: {
        type: Number
    }
})
const Pedidos = mongoose.model("pedidos", pedidosSchema);
export default Pedidos;