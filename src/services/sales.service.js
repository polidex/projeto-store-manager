/* const productsModel = require('../models/products.model');
const salesModel = require('../models/sales.model');

const hasProductDb = async (sales) => {
  const findId = await Promise.all(
    sales.map(({ productId }) => productsModel.readDbProductsById(productId)),
  );

  if (findId.some((id) => !id)) {
    return { type: 404, message: 'product not found' };
  }
};

const postDbSales = async (sale) => {
  const result = await hasProductDb(sale);

  if (result) return result;
  const newSaleId = await salesModel.createSales();
  await salesModel.createSalesProducts(sale, newSaleId);

  return { type: null, message: { id: newSaleId, itemSold: sale } };
};

module.exports = {
  postDbSales,
}; */