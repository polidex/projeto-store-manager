const salesModel = require('../models/sales.model');

const hasSale = async (req, res, next) => {
  const { id } = req.params;
  
  const result = await salesModel.readDbSalesById(id);
  if (result.length < 1) return res.status(404).json({ message: 'Sale not found' });
  return next();
};

module.exports = {
  hasSale,
};