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

const listSales = async (_req, res) => {
  const salesList = await salesService.getDbSales();
  console.log(salesList);
  return res.status(200).json(salesList);
};

const listSalesById = async (req, res) => {
  const { id } = req.params;

  const salesListById = await salesService.getDbSalesById(id);
  return res.status(200).json(salesListById);
};

const removeSales = async (req, res) => {
  const { id } = req.params;

  await salesService.deleteDbsales(id);
  return res.status(204).end();
};

const modifySales = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;
  
  const salesModify = await salesService.putDbSales(id, sales);
  return res.status(200).json(salesModify);
};
   
module.exports = {
  addSales,
  listSales,
  listSalesById,
  removeSales,
  modifySales,
};