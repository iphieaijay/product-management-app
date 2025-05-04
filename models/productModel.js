const db = require("../db");

exports.getAllProducts = async () => {
  const [rows] = await db.query("SELECT * FROM products");
  return rows;
};

exports.getProductById = async (id) => {
  const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

exports.createProduct = async (product) => {
  const [result] = await db.query("INSERT INTO products SET ?", product);
  return result.insertId;
};

exports.updateProduct = async (id, product) => {
  await db.query("UPDATE products SET ? WHERE id = ?", [product, id]);
};

exports.deleteProduct = async (id) => {
  await db.query("DELETE FROM products WHERE id = ?", [id]);
};
