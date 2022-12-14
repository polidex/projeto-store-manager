const productsModel = require('../models/products.model');

const getDbProducts = async () => {
  const result = await productsModel.readDbProducts();
  return result;
};

const getDbProductsById = async (id) => {
  const result = await productsModel.readDbProductsById(id);
  return result;
};

const postDbProducts = async (name) => {
  const result = await productsModel.createDbProducts(name);
  return result;
};

const putDbProductsById = async (id, name) => {
  const result = await productsModel.updateDbProducts(id, name);
  return result;
};

const deleteDbProductsById = async (id) => {
  const result = await productsModel.deleteDbProducts(id);
  return result;
};

const getDbProductsByName = async (name) => {
  const result = await productsModel.readDbProductsByName(name);
  return result;
};

module.exports = {
  getDbProducts,
  getDbProductsById,
  postDbProducts,
  putDbProductsById,
  deleteDbProductsById,
  getDbProductsByName,
};