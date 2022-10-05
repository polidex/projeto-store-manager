const hasQuantity = (req, res, next) => {
  const sales = req.body;
  
  const result = sales.some(({ quantity }) => quantity === undefined);
  if (result) return res.status(400).json({ message: '"quantity" is required' });

  return next();
};

const minSaleQuantity = (req, res, next) => {
  const sales = req.body;

  const result = sales.some(({ quantity }) => quantity <= 0);
  if (result) {
    return res.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};

module.exports = {
  hasQuantity,
  minSaleQuantity,
};