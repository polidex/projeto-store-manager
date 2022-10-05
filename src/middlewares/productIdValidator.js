const productsModel = require('../models/products.model');

const hasProductId = (req, res, next) => {
  const sales = req.body;

  const result = sales.some(({ productId }) => productId === undefined);
  if (result) return res.status(400).json({ message: '"productId" is required' });

  return next();
};

const productIdExists = async (req, res, next) => {
  const sales = req.body;

  const findId = await Promise.all(
    sales.map(({ productId }) => productsModel.readDbProductsById(productId)),
    );
    console.log(findId);

  const result = findId.some((product) => !product);
  if (result) return res.status(404).json({ message: 'Product not found' });
  return next();
};

module.exports = {
  hasProductId,
  productIdExists,
};