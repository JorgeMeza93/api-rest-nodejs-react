import express from "express";
import router from "./routes/index.js";
import conectarDB from "./config/db.js";
import routerProductos from "./routes/productosRoutes.js";
import routerPedidos from "./routes/pedidosRoutes.js";
import cors from "cors";

const app = express();
const port = 3300;

conectarDB();
app.use(express.json());
//Habilitar la lectura de datos desde el request
app.use( express.urlencoded({ extended: true }))
app.use(cors());
app.use("/", router);
app.use("/", routerProductos);
app.use("/", routerPedidos)

//Listen
app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`)
})