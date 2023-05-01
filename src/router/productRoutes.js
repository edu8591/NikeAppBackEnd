const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../databse/products");
// Get all products
router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send({ status: "OK", data: products });
});

// Get one product by id
router.get("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await getProductById(productId);
    if (product) {
      return res.status(200).send({ status: "OK", data: product });
    }
    res.status(404).send({
      status: "FAILED",
      data: `No product with id ${productId} was found`,
    });
  } catch (err) {
    res.status(401).send({ status: "FAILED", error: err.message });
  }
});

module.exports = router;
