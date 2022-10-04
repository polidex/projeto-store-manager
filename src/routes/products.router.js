const express = require('express');
const productsController = require('../controllers/products.controller');
const findProduct = require('../middlewares/findProduct');
const nameValidator = require('../middlewares/nameValidator');

const productsRouter = express.Router();

productsRouter.get('/search', productsController.searchProducts);

productsRouter.get('/', productsController.listProducts);

productsRouter.post('/', nameValidator, productsController.addProducts);

productsRouter.get('/:id', findProduct, productsController.listProductsById);

productsRouter.put('/:id', findProduct, nameValidator, productsController.modifyProducts);

productsRouter.delete('/:id', findProduct, productsController.removeProducts);

module.exports = productsRouter;