const categorias = [
  {
    id: 1,
    nombre: "Deportes de contacto",
  },
];

let currentId = 2;

const getCategorias = () => categorias;

const findCategoria = (id) => categorias.find((c) => c.id == id);

const createCategoria = (nombre) => {
  const newCategoria = {
    id: currentId++,
    nombre,
  };
  categorias.push(newCategoria);
  return newCategoria;
};

const deleteCategoria = (id) => {
  // implementar que una categoria no se pueda eliminar si tiene actividades asociadas
  let indexToBeDeleted = categorias.findIndex((c) => c.id == id);
  if (indexToBeDeleted === -1) return false;
  // Check if the category has associated activities
  const hasAssociatedActivities = categorias.some((a) => a.categoria?.id == id);
  if (hasAssociatedActivities) return false;
  categorias.splice(indexToBeDeleted, 1);
  return true;
};

const updateCategoria = (id, body) => {
  const index = categorias.findIndex((categoria) => categoria.id == id);
  if (index >= 0) {
    categorias[index] = { ...categorias[index], ...body };
  }
  return categorias[index];
};

module.exports = {
  getCategorias,
  findCategoria,
  createCategoria,
  deleteCategoria,
  updateCategoria,
};
