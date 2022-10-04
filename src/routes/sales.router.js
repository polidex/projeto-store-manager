const express = require('express');
const salesController = require('../controllers/sales.controller');
const {
  hasProductId,
  productIdExists,
} = require('../middlewares/productIdValidator');
// const findProduct = require('../middlewares/findProduct');

const salesRouter = express.Router();

salesRouter.post(
  '/',
  hasProductId,
  productIdExists,
  /* findProduct, */
  salesController.addSales,
);

module.exports = salesRouter;