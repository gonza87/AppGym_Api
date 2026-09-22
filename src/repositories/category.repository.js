const Category = require("../models/category.model");

const findCategoryById = async (id) => {
  return await Category.findById(id).select("");
};

const findAllCategories = async () => {
  return await Category.find();
};

const createCategory = async (name) => {
  const newCategory = new Category({
    name: name,
  });
  await newCategory.save();
};

const deleteCategoryById = async (id) => {
  return await Category.deleteOne({ _id: id });
};

const updateCategoryById = async (id, body) => {

  const catergoryUpdate = await Category.findById(id);
  console.log(catergoryUpdate);

  if (catergoryUpdate) {
    Object.entries(body).forEach(([key, value]) => {
      catergoryUpdate[key] = value;
    });
    await catergoryUpdate.save();
  }

  return catergoryUpdate;
};

module.exports = {
  findCategoryById,
  findAllCategories,
  createCategory,
  deleteCategoryById,
  updateCategoryById,
};
