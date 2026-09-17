const {
  getInscripciones,
  findInscripcion,
  createInscripcion,
  deleteInscripcion,
} = require("../models/inscripciones.model");

const getInscripcionesController = (req, res) => {
  res.status(200).json(getInscripciones());
};

const getInscripcionControllerById = (req, res) => {
  const inscripcion = findInscripcion(req.params.id);
  if (inscripcion) {
    res.status(200).json(inscripcion);
  } else {
    res.status(404).json({
      message: `Inscripción no encontrada`,
    });
  }
};

const postInscripcionController = async (req, res) => {
  const role = req.user.role;
  const userId = req.user.id;

  const { actividadId, fecha } = req.body;

  createInscripcion(userId, actividadId, fecha);
  res.status(201).json({
    message: "Inscripción creada correctamente",
  });
};

const deleteInscripcionController = (req, res) => {
  const deleted = deleteInscripcion(req.params.id);
  if (deleted) {
    res.status(204).json({
      message: "Inscripción eliminada correctamente",
    });
  } else {
    res.status(404).json({
      message: `Inscripción no encontrada`,
    });
  }
};

module.exports = {
  getInscripcionesController,
  getInscripcionControllerById,
  postInscripcionController,
  deleteInscripcionController,
};
