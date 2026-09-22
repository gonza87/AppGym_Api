const {
  findCategoryById,
  findAllCategories,
  createCategory,
  deleteCategoryById,
  updateCategoryById,
} = require("../repositories/category.repository");

const getCategoriasController = async (req, res) => {
  res.status(200).json(await findAllCategories());
};

const findCategoriaControllerById = async (req, res) => {
  const categoria = await findCategoryById(req.params.id);
  if (categoria) {
    res.status(200).json(categoria);
  } else {
    res.status(404).json({
      message: `Categoría no encontrada`,
    });
  }
};

const createCategoriaController = async (req, res) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden crear categorías.",
    });
  }

  const { name } = req.body;
  const newCategoria = await createCategory(name);
  res.status(201).json(newCategoria);
};

const updateCategoriaController = async (req, res) => {
  const id = req.params.id;
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden actualizar categorías.",
    });
  }

  const updated = await updateCategoryById(id, req.body);
  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(404).json({
      message: `Categoría no encontrada`,
    });
  }
};

const deleteCategoriaController = async (req, res) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({
      message:
        "Acceso denegado. Solo los administradores pueden eliminar categorías.",
    });
  }

  const deleted = await deleteCategoryById(req.params.id);
  if (deleted.deletedCount === 1) {
    res.status(204).send();
  } else {
    res.status(404).json({
      message: `Actividad no encontrada`,
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
