const Inscripcion = require("./models/inscripciones.model");

const findInscripcionById = async (id) => {
  return await Inscripcion.findById(id);
};

const findAllInscripciones = async () => {
  return await Inscripcion.find();
};

const createInscripcion = async (userId, actividadId, fecha) => {
  const newInscripcion = new Inscripcion({
    userId: userId,
    actividadId: actividadId,
    fecha: fecha,
  });
  return await newInscripcion.save();
};

const deleteInscripcionById = async (id) => {
  const inscripcionToDelete = await Inscripcion.findById(id);
  if (!inscripcionToDelete) return null;
  await inscripcionToDelete.remove();
  return inscripcionToDelete;
};

module.exports = {
  findInscripcionById,
  findAllInscripciones,
  createInscripcion,
  deleteInscripcionById,
};
