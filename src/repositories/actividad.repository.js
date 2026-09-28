const Actividad = require("../models/actividad.model");
const Inscripcion = require("../models/inscripciones.model");
const Category = require("../models/category.model");

const findActividadById = async (id) => {
  return await Actividad.findById(id).select(
    "name categoryId description date schedule",
  );
};

const findAllActividades = async () => {
  return await Actividad.find();
};

const createActividad = async (
  name,
  categoryId,
  description,
  date,
  schedule,
) => {
  const existingActividad = await Actividad.findOne({ name: name });
  if (existingActividad) {
    throw new Error("Ya existe una actividad con ese nombre.");
  }

  const existingCategory = await Category.findById(categoryId);
  if (!existingCategory) {
    throw new Error("La categoría especificada no existe.");
  }

  const newActividad = new Actividad({
    name: name,
    categoryId: categoryId,
    description: description,
    date: date,
    schedule: schedule,
  });

  await newActividad.save();
};

const deleteActividadById = async (id) => {
  const inscripciones = await Inscripcion.find({ activityId: id });
  if (inscripciones.length > 0) {
    throw new Error(
      "No se puede eliminar la actividad porque tiene inscripciones asociadas.",
    );
  }
  return await Actividad.deleteOne({ _id: id });
};

const updateActividadById = async (id, body) => {
  const actividadAActualizar = await Actividad.findById(id);
  console.log(actividadAActualizar);

  if (actividadAActualizar) {
    Object.entries(body).forEach(([key, value]) => {
      actividadAActualizar[key] = value;
    });
    await actividadAActualizar.save();
  }

  return actividadAActualizar;
};

module.exports = {
  findActividadById,
  findAllActividades,
  createActividad,
  deleteActividadById,
  updateActividadById,
};
