const inscripciones = [
  {
    id: 1,
    userId: "1",
    categoryId: "1",
    actividadId: "1",
    fecha: "2025-10-25",
  },
  {
    id: 2,
    userId: "1",
    categoryId: "1",
    actividadId: "1",
    fecha: "2025-10-26",
  },
];

let currentId = 3;

const getInscripciones = () => inscripciones;

const findInscripcion = (id) => inscripciones.find((i) => i.id == id);

const createInscripcion = (userId, categoryId, actividadId, fecha) => {
  const newInscripcion = {
    id: currentId++,
    userId,
    categoryId,
    actividadId,
    fecha,
  };
  inscripciones.push(newInscripcion);
  return newInscripcion;
};

const deleteInscripcion = (id) => {
  let indexToBeDeleted = inscripciones.findIndex((i) => i.id == id);
  if (indexToBeDeleted === -1) return false;
  inscripciones.splice(indexToBeDeleted, 1);
  return true;
};

module.exports = {
  getInscripciones,
  findInscripcion,
  createInscripcion,
  deleteInscripcion,
};
