const productsService = require('../services/products.service');

const listProducts = async (_req, res) => {
  const productsList = await productsService.getDbProducts();
  return res.status(200).json(productsList);
};

const listProductsById = async (req, res) => {
  const { id } = req.params;

  const productsListById = await productsService.getDbProductsById(id);
  return res.status(200).json(productsListById);
};

const addProducts = async (req, res) => {
  const { name } = req.body;
  
  const productsAdd = await productsService.postDbProducts(name);
  return res.status(201).json({ id: productsAdd.insertId, name });
};

const modifyProducts = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const productsModify = await productsService.putDbProductsById(id, name);
  return res.status(200).json({ id: productsModify.insertId, name });
};

const removeProducts = async (req, res) => {
  const { id } = req.params;
  
  await productsService.deleteDbProductsById(id);
  return res.status(204).end();
};

const searchProducts = async (req, res) => {
  const { q } = req.query;

  const result = await productsService.getDbProductsByName(q);
  return res.status(200).json(result);
};

module.exports = {
  listProducts,
  listProductsById,
  addProducts,
  modifyProducts,
  removeProducts,
  searchProducts,
};