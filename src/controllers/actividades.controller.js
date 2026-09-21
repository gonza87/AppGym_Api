const { getActividades, findActividad, createActividad, deleteActividad, updateActividad } = require("../models/actividad.model");

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

const postActividadController = async (req, res) => {
    
    const role = req.user.role;
    if (role !== "admin") {
        return res.status(403).json({ message: "Acceso denegado. Solo los administradores pueden crear actividades." });
    }

    const { nombre, categoria, descripcion, fecha, horario} = req.body;
    createActividad(nombre, categoria, descripcion, fecha, horario);
    res.status(201).json({
        message: "Actividad creada correctamente"
    })
}

const putActividadController = (req, res) => {
    const id = req.params.id;
    const role = req.user.role;
    if (role !== "admin") {
        return res.status(403).json({ message: "Acceso denegado. Solo los administradores pueden crear actividades." });
    }


    const updated = updateActividad(id, req.body)
    if (updated) {
        res.status(200).json(updated)
    } else {
        res.status(404).json({
            message: `Actividad no encontrada`
        })
    }
}

const deleteActividadController = (req, res) => {

    const role = req.user.role;
    if (role !== "admin") {
        return res.status(403).json({ message: "Acceso denegado. Solo los administradores pueden crear actividades." });
    }
    
    const deleted = deleteActividad(req.params.id)
    if (deleted) {
        res.status(204).json({
            message: "Actividad eliminada correctamente"
        })
    } else {
        res.status(404).json({
            message: `Actividad no encontrada`
        })
    }
}

module.exports = {
  getActividadesController,
  getActividadControllerById,
  postActividadController,
  putActividadController,
  deleteActividadController

};
