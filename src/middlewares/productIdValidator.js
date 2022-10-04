const hasProductId = (req, res, next) => {
  const { productId } = req.body;

  if (!productId) res.status(400).json({ message: '"productId" is required' });

  next();
};

const productIdExists = (req, res, next) => {
  const sales = req.body;

  if (sales.some(({ productId }) => productId === undefined)) {
    res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  hasProductId,
  productIdExists,
};