const actividades = [
  {
    id: 1,
    Nombre: "Judo",
    Categoria: "Deportes de contacto",
    Descripcion: "se realiza en grupos mixto",
    Fecha: "2025/10/25",
    Horario: "9:30",
  },
];

let currentId = 2;

const getActividades = () => actividades;

const findActividad = (id) => actividades.find((a) => a.id == id);

const createActividad = (nombre, descripcion, fecha, horario, categoria) => {
  const newActividad = {
    id: currentId++,
    nombre,
    descipcion,
    fecha,
    horario,
    categoria: categoria || null,
  };
  actividades.push(newActividad);
  return newActividad;
};

const deleteActividad = (id) => {
  let indexToBeDeleted = actividades.findIndex((a) => a.id == id);
  if (indexToBeDeleted === -1) return false;
  actividades.splice(indexToBeDeleted, 1);
  return true;
};

const updateActividad = (id, body) => {
  const index = actividades.findIndex((actividad) => actividad.id == id);
  if (index >= 0) {
    actividades[index] = { ...actividades[index], ...body };
  }
  return actividades[index];
};

module.exports = {
  getActividades,
  findActividad,
  createActividad,
  deleteActividad,
  updateActividad,
};

/*
const expenses = [];

let currentId = 1;

const getExpenses = () => expenses;

const findExpenses = (id) => expenses.find((e) => e.id == id);

const createExpense = (concepto, costo, fecha, categoria) => {
  const newExpense = {
    id: currentId++,
    concepto,
    costo,
    fecha,
    categoria: categoria || null,
  };
  expenses.push(newExpense);
  return newExpense;
};

const deleteExpense = (id) => {
  let indexToBeDeleted = expenses.findIndex((e) => e.id == id);
  if (indexToBeDeleted === -1) return false;

  expenses.splice(indexToBeDeleted, 1);
  return true;
};

const updateExpense = (id, body) => {
  const index = expenses.findIndex((toDo) => toDo.id == id);
  if (index >= 0) {
    expenses[index] = { ...expenses[index], ...body };
  }
  return expenses[index];
};

module.exports = {
  getExpenses,
  findExpenses,
  createExpense,
  deleteExpense,
  updateExpense,
};
*/
