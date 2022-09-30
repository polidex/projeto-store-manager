const connection = require('../db/connection');

const readDbProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const result = await connection.execute(query);
  return result;
};

const readDbProductsById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const result = await connection.execute(query, [id]);
  return result;
};

module.exports = {
  readDbProducts,
  readDbProductsById,
};