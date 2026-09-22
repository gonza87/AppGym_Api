const Category = require("../models/category.model");

const findCategoryById = async (id) => {
  return await Category.findById(id);
};

const findAllCategories = async () => {
  return await Category.find();
};

const createCategory = async (name) => {
  const newCategory = new Category({
    name: name,
  });
  return await newCategory.save();
};

const deleteCategoryById = async (id) => {
  const categoryToDelete = await Category.findById(id);
  if (!categoryToDelete) return null;
  await categoryToDelete.remove();
  return categoryToDelete;
};

const updateCategoryById = async (id, body) => {
  const categoryToUpdate = await Category.findById(id);
  if (!categoryToUpdate) return null;
  Object.assign(categoryToUpdate, body);
  return await categoryToUpdate.save();
};

module.exports = {
  findCategoryById,
  findAllCategories,
  createCategory,
  deleteCategoryById,
  updateCategoryById,
};
