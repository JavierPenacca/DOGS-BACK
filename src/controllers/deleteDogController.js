const { Dog } = require("../db");

async function eliminarPerroPorId(id) {
    try {
      // Buscar el perro por su ID en la base de datos
      const perro = await Dog.findByPk(id);
      if (!perro) {
        throw new Error('Perro no encontrado');
      }
  
      // Eliminar el perro
      await perro.destroy();
  
      return 'Perro eliminado correctamente';
    } catch (error) {
      throw new Error('No se pudo eliminar el perro');
    }
  }

module.exports = { deleteDogController };