import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://root:rootroot@cluster0.egezjtb.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`conectado en: ${url}`);
    } catch (error) {
        console.log(`Error en: ${error.message}`);
    }
}

export default conectarDB;

