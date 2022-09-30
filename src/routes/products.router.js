const express = require('express');
const productsController = require('../controllers/products.controller');
const nameValidator = require('../middlewares/nameValidator');

const productsRouter = express.Router();

productsRouter.get('/', productsController.listProducts);

productsRouter.get('/:id', productsController.listProductsById);

productsRouter.post('/', nameValidator, productsController.addProducts);

module.exports = productsRouter;