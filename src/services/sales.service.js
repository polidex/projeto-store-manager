const salesModel = require('../models/sales.model');

const postDbSales = async (sale) => {
  const saleId = await salesModel.createSales();
  await salesModel.createSalesProducts(sale, saleId);
  return saleId;
};

module.exports = {
  postDbSales,
};