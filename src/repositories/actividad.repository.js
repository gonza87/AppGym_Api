const Actividad = require("../models/actividad.model");

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

  // if (!actividadAActualizar) return null;
  // Object.assign(actividadAActualizar, body);
  // return await actividadAActualizar.save();
};

/*
const upateToDo = async (todoId, userId, payload) => {
    const todo = await Todo.findOne({
        _id:todoId,
        userId: userId
    });

    console.log(todo);
    
    if(todo){
        Object.entries(payload).forEach(([key, value]) => {
            todo[key] = value;
        })
        await todo.save();
    }
    return todo;
};
*/

module.exports = {
  findActividadById,
  findAllActividades,
  createActividad,
  deleteActividadById,
  updateActividadById,
};
