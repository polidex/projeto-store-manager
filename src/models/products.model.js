const connection = require('../db/connection');

const readDbProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const result = await connection.execute(query);
  return result[0];
};

const readDbProductsById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const result = await connection.execute(query, [id]);
  return result[0];
};

const createDbProducts = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE (?)';
  const result = await connection.execute(query, [name]);
  return result[0];
};

const updateDbProducts = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = (?) WHERE id = (?)';
  const result = await connection.execute(query, [name, id]);
  return result[0];
};

const deleteDbProducts = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = (?)';
  const result = await connection.execute(query, [id]);
  return result[0];
};

const readDbProductsByName = async (name) => {
  const query = `SELECT * FROM StoreManager.products WHERE LOWER(name) LIKE '%${name}%'`;
  const result = await connection.execute(query);
  return result[0];
};

module.exports = {
  readDbProducts,
  readDbProductsById,
  createDbProducts,
  updateDbProducts,
  deleteDbProducts,
  readDbProductsByName,
};