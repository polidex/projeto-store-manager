const productsService = require('../services/products.service');

const listProducts = async (_req, res) => {
  const productsList = productsService.getDbProducts();
  return res.status(200).json(productsList);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;
  const productsListById = productsService.getDbProductsById(id);
  if (!productsListById) return res.status(404).json('Product not found');
  return res.status(200).json(productsListById);
};

module.exports = {
  listProducts,
  listProductsById,
};