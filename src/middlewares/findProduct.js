const productsModel = require('../models/products.model');

const findProduct = async (req, res, next) => {
  const { id } = req.params;
  const result = await productsModel.readDbProductsById(id);

  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return -next();
};
module.exports = findProduct;