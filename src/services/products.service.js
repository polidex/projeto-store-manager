const productsModel = require('../models/products.model');

const getDbProducts = async () => {
  const result = await productsModel.readDbProducts();
  return result;
};

const getDbProductsById = async (id) => {
  const result = await productsModel.readDbProductsById(id);
  return result;
};

module.exports = {
  getDbProducts,
  getDbProductsById,
};