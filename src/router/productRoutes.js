const express = require("express");
const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  res.status(200).send({ title: "get all Products" });
});

// Get one product by id
router.get("/:productId", (req, res) => {
  res.status(200).send("Get one product by id");
});

module.exports = router;
