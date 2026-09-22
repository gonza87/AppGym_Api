const Inscripcion = require("../models/inscripciones.model");

/*const findInscripcionById = async (id) => {
  return await Inscripcion.findById(id);
};*/

const findInscripcionById = async (inscripcionId, userId) => {
  return await Inscripcion.find({
    _id: inscripcionId,
    userId: userId,
  }).select("userId activityId date _id");
};

/*const findAllInscripciones = async () => {
  return await Inscripcion.find();
};*/

const createInscripcion = async (userId, activityId, date) => {
  const newInscripcion = new Inscripcion({
    userId: userId,
    activityId: activityId,
    date: date,
  });
  return await newInscripcion.save();
};

const deleteInscripcionById = async (inscripcionId, userId) => {
  return await Inscripcion.deleteOne({ _id: inscripcionId, userId: userId });
};

/*

const deleteToDo = async (todoId, userId) => {
    return await Todo.deleteOne({_id: todoId, userId: userId})
};

*/

const getInscripcionesPaginated = async (userId, page = 1, limit = 5) => {
  const skip = (page - 1) * limit;

  const [inscripciones, total] = await Promise.all([
    Inscripcion.find({ userId }).skip(skip).limit(limit),
    Inscripcion.countDocuments({ userId }),
  ]);

  return {
    data: inscripciones,
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
};

module.exports = {
  findInscripcionById,

  getInscripcionesPaginated,
  createInscripcion,
  deleteInscripcionById,
};
