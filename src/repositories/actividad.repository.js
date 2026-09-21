const Actividad = require("../models/actividad.model");

const findActividadById = async (id) => {
  return await Actividad.findById(id);
};

const findAllActividades = async () => {
  return await Actividad.find();
};

const createActividad = async (name, category, description, date, schedule) => {
  const newActividad = new Actividad({
    name: name,
    category: category,
    description: description,
    date: date,
    schedule: schedule,
  });
  return await newActividad.save();
};

const deleteActividadById = async (id) => {
  const actividadABorrar = await Actividad.findById(id);
  if (!actividadABorrar) return null;
  await actividadABorrar.remove();
  return actividadABorrar;
};

const updateActividadById = async (id, body) => {
  const actividadAActualizar = await Actividad.findById(id);
  if (!actividadAActualizar) return null;
  Object.assign(actividadAActualizar, body);
  return await actividadAActualizar.save();
};

module.exports = {
  findActividadById,
  findAllActividades,
  createActividad,
  deleteActividadById,
  updateActividadById,
};
