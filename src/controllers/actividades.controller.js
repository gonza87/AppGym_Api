const {
  findAllActividades,
  findActividadById,
  createActividad,
  deleteActividadById,
  updateActividadById,
} = require("../repositories/actividad.repository");

const getActividadesController = async (req, res) => {
  const actividades = await findAllActividades();
  res.status(200).json(actividades);
};

const getActividadControllerById = async (req, res) => {
  const actividad = await findActividadById(req.params.id);
  if (actividad) {
    res.status(200).json(actividad);
  } else {
    res.status(404).json({
      message: `Actividad no encontrada`,
    });
  }
};

const postActividadController = async (req, res) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden crear actividades.",
    });
  }

  const { name, categoryId, description, date, schedule } = req.body;
  createActividad(name, categoryId, description, date, schedule);
  res.status(201).json({
    message: "Actividad creada correctamente",
  });
};

const putActividadController = async (req, res) => {
  const id = req.params.id;
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden crear actividades.",
    });
  }

  const updated = await updateActividadById(id, req.body);
  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(404).json({
      message: `Actividad no encontrada`,
    });
  }
};

const deleteActividadController = async (req, res) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden crear actividades.",
    });
  }

  const deleted = await deleteActividadById(req.params.id);
  if (deleted.deletedCount === 1) {
    res.status(204).send();
  } else {
    res.status(404).json({
      message: `Actividad no encontrada`,
    });
  }
};

module.exports = {
  getActividadesController,
  getActividadControllerById,
  postActividadController,
  putActividadController,
  deleteActividadController,
};
