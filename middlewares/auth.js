import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: ".env" })
const autorizacion = (req, res, next) => {
    //Actualizacion por medio del header
    const authHeader = req.get("Authorization");
    if(!authHeader){
        const error = new Error("No autenticado, no hay JWT de autenticacion");
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(" ")[1];
    let revisarToken;
    try {
        revisarToken = jwt.verify(token, process.env.JWT_PALABRA_SECRETA);
    } catch (error) {
        error.statusCode = 500;
        throw error
    }
    if(!revisarToken){
        const error = new Error("No autenticado");
        error.statusCode = 401;
        throw error;
    }
    next();
}

export default autorizacion;