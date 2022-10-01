/* const salesService = require('../services/sales.service');

const addSales = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.postDbSales(sales);

  if (type) return res.status(type).json(message);

  return res.status(201).json(message);
};

module.exports = {
  addSales,
}; */