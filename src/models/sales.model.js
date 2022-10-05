const connection = require('../db/connection');

const createSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUE (NOW())';
  const result = await connection.execute(query);
  return result[0].insertId;
};

const createSalesProducts = async (sales, saleId) => {
  const query = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES (?, ?, ?)`;
  await Promise.all(sales.map(async (sale) => {
    await connection.execute(query, [saleId, sale.productId, sale.quantity]);
  }));
  return saleId;
};

const readDbSales = async () => {
  const query = `SELECT sp.sale_id as saleId, sp.product_id as productId, sp.quantity,
  sa.date FROM StoreManager.sales_products AS sp
  INNER JOIN StoreManager.sales AS sa ON sa.id = sp.sale_id`;
  const result = await connection.execute(query);
  console.log(result);
  return result[0];
};

const readDbSalesById = async (id) => {
  const query = `SELECT sa.date, sp.product_id as productId, sp.quantity
    FROM StoreManager.sales as sa
    INNER JOIN StoreManager.sales_products as sp on sa.id = sp.sale_id
    WHERE sa.id = (?) ORDER BY sa.id ASC, sp.product_id ASC`;
  const result = await connection.execute(query, [id]);
  return result[0];
};

const deleteDbsales = async (id) => {
  const query = 'DELETE FROM StoreManager.sales_products WHERE sale_id = (?)';
  const result = await connection.execute(query, [id]);
  return result[0];
};

module.exports = {
  createSales,
  createSalesProducts,
  readDbSales,
  readDbSalesById,
  deleteDbsales,
};