import Usuario from "../models/Usuarios.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const registrarUsuario = async (req, res, next) => {
    const { password } = req.body;
    const usuario = new Usuario(req.body);
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);
    try {
        await usuario.save();
        res.json({ mensaje: "Usuario creado correctamente" })
    } catch (error) {
        console.log(error);
        res.json({ mensaje: "Ha ocurrido un error" });
    }
}

const autenticarUsuario = () => {

}

export { registrarUsuario, autenticarUsuario}