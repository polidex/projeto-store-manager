const salesModel = require('../models/sales.model');

const postDbSales = async (sale) => {
  const saleId = await salesModel.createSales();
  await salesModel.createSalesProducts(sale, saleId);
  return saleId;
};

const getDbSales = async () => {
  const listSales = await salesModel.readDbSales();
  return listSales;
};

const getDbSalesById = async (id) => {
  const listSalesById = await salesModel.readDbSalesById(id);
  return listSalesById;
};

module.exports = {
  postDbSales,
  getDbSales,
  getDbSalesById,
};