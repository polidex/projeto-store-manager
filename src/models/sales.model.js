const connection = require('../db/connection');

const createSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUE (NOW())';
  const result = await connection.execute(query);
  return result[0].insertId;
};

const createSalesProducts = async (sales, newSaleId) => {
  const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES (?, ?, ?)`;
  await Promise.all(sales.map(async (sale) => {
    await connection.execute(query, [newSaleId, sale.productId, sale.quantity]);
  }));
  return newSaleId;
};

module.exports = {
  createSales,
  createSalesProducts,
};