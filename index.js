import express from "express";
import router from "./routes/index.js";
import conectarDB from "./config/db.js";

const app = express();
const port = 3000;

conectarDB();
app.use("/", router);

//Listen
app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})