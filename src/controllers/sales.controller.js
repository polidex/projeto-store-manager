const salesService = require('../services/sales.service');

const addSales = async (req, res) => {
  const sales = req.body;

  const salesAdd = await salesService.postDbSales(sales);
  console.log(salesAdd);
  return res.status(201).json({
    id: salesAdd,
    itemsSold: sales,
  });
};

module.exports = {
  addSales,
};