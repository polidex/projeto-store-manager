const productsModel = require('../models/products.model');

const findProduct = async (req, res, next) => {
  const { id } = req.params;
  const result = await productsModel.readDbProductsById(id);

  if (result.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};
module.exports = findProduct;