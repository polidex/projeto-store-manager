const express = require('express');
const salesController = require('../controllers/sales.controller');
const { hasProductId, productIdExists } = require('../middlewares/productIdValidator');
const { hasQuantity, minSaleQuantity } = require('../middlewares/quantityValidator');

const salesRouter = express.Router();

salesRouter.post(
  '/',
  hasProductId,
  hasQuantity,
  minSaleQuantity,
  productIdExists,
  salesController.addSales,
);

module.exports = salesRouter;