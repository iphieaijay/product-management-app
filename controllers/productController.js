const Product = require("../models/productModel");

exports.getAll = async (req, res) => {
  const products = await Product.getAllProducts();
  res.json(products);
};

exports.getById = async (req, res) => {
  const product = await Product.getProductById(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Not found" });
};

exports.create = async (req, res) => {
  const id = await Product.createProduct(req.body);
  res
    .status(201)
    .json({ id, ...req.body, message: "product created successfully." });
};

exports.update = async (req, res) => {
  await Product.updateProduct(req.params.id, req.body);
  res.json({ message: "Updated successfully" });
};

exports.delete = async (req, res) => {
  await Product.deleteProduct(req.params.id);
  res.json({ message: "Deleted successfully" });
};
// This code defines a controller for handling product-related requests in an Express.js application.
// It uses a model to interact with the database and provides functions to get all products, get a product by ID, create a new product, update an existing product, and delete a product.
