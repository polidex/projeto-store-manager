const productsService = require('../services/products.service');

const listProducts = async (_req, res) => {
  const productsList = await productsService.getDbProducts();
  return res.status(200).json(productsList);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;
  const productsListById = await productsService.getDbProductsById(id);
  if (productsListById.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(productsListById[0]);
};

module.exports = {
  listProducts,
  listProductsById,
};