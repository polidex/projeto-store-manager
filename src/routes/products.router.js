const express = require('express');
const productsController = require('../controllers/products.controller');
const nameValidator = require('../middlewares/nameValidator');

const productsRouter = express.Router();

productsRouter.get('/search', productsController.searchProducts);

productsRouter.get('/', productsController.listProducts);

productsRouter.post('/', nameValidator, productsController.addProducts);

productsRouter.get('/:id', productsController.listProductsById);

productsRouter.put('/:id', nameValidator, productsController.modifyProducts);

productsRouter.delete('/:id', productsController.removeProducts);

module.exports = productsRouter;