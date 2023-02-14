import Usuario from "../models/Usuarios.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config({ path: ".env" })
const registrarUsuario = async (req, res) => {
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

const autenticarUsuario  = async (req, res, next) => {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if(!usuario){
        await res.status(401).json({ mensaje: "Usuario no existente" });
        next();
    }
    else{
        if(!bcrypt.compareSync(password, usuario.password)){
            await res.status(401).json({ mensaje: "Pssword Incorrecto" });
            next();
        }
        else{
            //password correcto, firmar el token
            const token = jwt.sign({
                email: usuario.email,
                nombre: usuario.nombre,
                _id: usuario._id
            }, process.env.JWT_PALABRA_SECRETA,
            {
                expiresIn: "6h"
            });
            res.json({ token })
        }
    }

}

export { registrarUsuario, autenticarUsuario}