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

const deleteDbsales = async (id) => {
  const salesDelete = await salesModel.deleteDbsales(id);
  return salesDelete;
};

module.exports = {
  postDbSales,
  getDbSales,
  getDbSalesById,
  deleteDbsales,
};