import express from "express";
import router from "./routes/index.js";
import conectarDB from "./config/db.js";

const app = express();
const port = 3000;

conectarDB();
//Habilitar la lectura de datos desde el request
app.use( express.urlencoded({ extended: true }))
app.use("/", router);

//Listen
app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})