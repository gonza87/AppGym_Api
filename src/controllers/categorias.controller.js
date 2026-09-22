const {
  findCategoryById,
  findAllCategories,
  createCategory,
  deleteCategoryById,
  updateCategoryById,
} = require("../repositories/category.repository");

const getCategoriasController = (req, res) => {
  res.status(200).json(findAllCategories());
};

const findCategoriaControllerById = (req, res) => {
  const categoria = findCategoryById(req.params.id);
  if (categoria) {
    res.status(200).json(categoria);
  } else {
    res.status(404).json({
      message: `Categoría no encontrada`,
    });
  }
};

const createCategoriaController = (req, res) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden crear categorías.",
    });
  }

  const { nombre } = req.body;
  const newCategoria = createCategoria(nombre);
  res.status(201).json(newCategoria);
};

const updateCategoriaController = (req, res) => {
  const id = req.params.id;
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden actualizar categorías.",
    });
  }

  const updated = updateCategoryById(id, req.body);
  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(404).json({
      message: `Categoría no encontrada`,
    });
  }
};

const deleteCategoriaController = (req, res) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden eliminar categorías.",
    });
  }

  const deleted = deleteCategoryById(req.params.id);
  if (deleted) {
    res.status(204).json({
      message: "Categoría eliminada correctamente",
    });
  } else {
    res.status(404).json({
      message: `Categoría no encontrada`,
    });
  }
};

module.exports = {
  getCategoriasController,
  findCategoriaControllerById,
  createCategoriaController,
  updateCategoriaController,
  deleteCategoriaController,
};
