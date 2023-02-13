import mongoose from "mongoose";

const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    nombre: {
        type: String,
        required: "Agrega tu nombre",
    },
    password: {
        type: String,
        required: true
    }
});

const Usuario = mongoose.model("usuarios", usuarioSchema);
export default Usuario;