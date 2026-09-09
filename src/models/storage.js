const actividades = [
  {
    id: 1,
    nombre: "Judo",
    categoria: "Deportes de contacto",
    descripcion: "se realiza en grupos mixto",
    fecha: "2025/10/25",
    horario: "9:30",
  },
];

let currentId = 2;

const getActividades = () => actividades;

const findActividad = (id) => actividades.find((a) => a.id == id);

const createActividad = (nombre, categoria, descripcion, fecha, horario) => {
  const newActividad = {
    id: currentId++,
    nombre,
    categoria: categoria || null,
    descripcion,
    fecha,
    horario,
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
