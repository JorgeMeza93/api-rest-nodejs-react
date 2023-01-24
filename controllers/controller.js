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
   try {
      const { id } = req.params;
      const cliente = await Cliente.findById(id);
      if(!cliente){
         return res.json({mensaje: "Usuario no existente"})
      }
      res.json(cliente)
   } catch (error) {
      console.log(error);
   }
}
const actualizarCliente = async (req, res) => {
   try {
      const { id } = req.params;
      const cliente = await Cliente.findOneAndUpdate({ _id: id }, req.body, { new: true })
      res.json({ cliente });
   } catch (error) {
      console.log(`Error al actualizar ${error}`);
   }
}
const eliminarCliente = async(req, res, next) => {
   try {
      const { id } = req.params;
      await Cliente.findOneAndDelete({ _id: id });
      res.json({ mensaje: "El cliente se ha eliminado" });
   } catch (error) {
      console.log(error);
      next();
   }
}

export { saludar, nuevoCliente, mostrarClientes, mostrarCliente, actualizarCliente, eliminarCliente }