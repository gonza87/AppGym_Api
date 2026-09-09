const { getActividades, findActividad } = require("../models/storage");

const getActividadesController = (req, res) => {
  res.status(200).json(getActividades());
};

const getActividadControllerById = (req, res) => {
  const actividad = findActividad(req.params.id);
  if (actividad) {
    res.status(200).json(actividad);
  } else {
    res.status(404).json({
      message: `Actividad no encontrada`,
    });
  }
};

module.exports = {
  getActividadesController,
  getActividadControllerById,
};
