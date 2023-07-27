const { deleteDogController } = require("../controllers/deleteDogController");

async function deleteHandler(req, res) {
    const { id } = req.params;
    try {
      const mensaje = await deleteDogController.eliminarPerroPorId(id);
      res.status(200).json({ message: mensaje });
    } catch (error) {
      res.status(500).json({ error: 'No se pudo eliminar el perro' });
    }
  }

module.exports = deleteHandler;