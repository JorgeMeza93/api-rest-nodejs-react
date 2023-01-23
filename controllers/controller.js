import Cliente from "../models/Cliente.js"

const saludar = (req, res) => {
   console.log("Hola Amigos");
}

const nuevoCliente = async (req, res, next) => {
   const cliente = new Cliente(req.body);
   try {
      await cliente.save();
      res.json({
         mensaje: "Se ha agregado un nuevo registro de cliente"
      })
   } catch (error) {
      console.log(error);
      next();
   }
}
const mostrarClientes = async (req, res, next) => {
   try {
      const clientes = await Cliente.find({});
      res.json(clientes)
   } catch (error) {
      console.log(error);
      next();
   }
}
const mostrarCliente = async (req, res, next) => {
   const { id } = req.params;
   const cliente = await Cliente.findById(id);
   if(!cliente){
      res.json({mensaje: "Cliente no existente"})
      next()
   }
   res.json(cliente)
}

export { saludar, nuevoCliente, mostrarClientes, mostrarCliente }