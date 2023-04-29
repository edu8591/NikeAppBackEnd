const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../databse/products");
// Get all products
router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).send(products);
});

// Get one product by id
router.get("/:productId", (req, res) => {
  res.status(200).send("Get one product by id");
});

module.exports = router;
