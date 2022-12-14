const express = require('express');
const salesController = require('../controllers/sales.controller');
const { hasProductId, productIdExists } = require('../middlewares/productIdValidator');
const { hasQuantity, minSaleQuantity } = require('../middlewares/quantityValidator');
const { hasSale } = require('../middlewares/saleValidator');

const salesRouter = express.Router();

salesRouter.post(
  '/',
  hasProductId,
  hasQuantity,
  minSaleQuantity,
  productIdExists,
  salesController.addSales,
);

salesRouter.get('/', salesController.listSales);

salesRouter.get('/:id', hasSale, salesController.listSalesById);

salesRouter.put(
  '/:id',
  hasProductId,
  hasQuantity,
  minSaleQuantity,
  productIdExists,
  hasSale,
  salesController.modifySales,
);

salesRouter.delete('/:id', hasSale, salesController.removeSales);

module.exports = salesRouter;