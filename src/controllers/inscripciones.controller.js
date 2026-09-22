const {
  findInscripcionById,
  getInscripcionesPaginated,
  createInscripcion,
  deleteInscripcionById,
} = require("../repositories/inscripciones.repository");

/*const getInscripcionesController = (req, res) => {
  res.status(200).json(findAllInscripciones());
};*/

const getInscripcionesController = async (req, res) => {
  const { id } = req.user;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  try {
    const result = await getInscripcionesPaginated(id, page, limit);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error: ", error });
  }
};

const getInscripcionControllerById = async (req, res) => {
  const inscripcionId = req.params.id;
  const { id } = req.user;
  try {
    const inscripcion = await findInscripcionById(inscripcionId, id);
    if (inscripcion) {
      res.status(200).json(inscripcion);
    }
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error: ", error });
  }
};

const postInscripcionController = async (req, res) => {
  //const role = req.user.role;
  const userId = req.user.id;

  const { activityId, date } = req.body;

  try {
    await createInscripcion(userId, activityId, date);
    res.status(201).json({
      message: "Inscripcion creada correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error: ", error });
  }
};

const deleteInscripcionController = async (req, res) => {
  const inscripcionId = req.params.id;
  const { id } = req.user;

  try {
    await deleteInscripcionById(inscripcionId, id);
    res.status(200).json({
      message: "Inscripción eliminada correctamente",
    });
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error: ", error });
  }
};

module.exports = {
  getInscripcionesController,
  getInscripcionControllerById,
  postInscripcionController,
  deleteInscripcionController,
};
