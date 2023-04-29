const { ObjectId } = require("mongodb");
const { products } = require("./db");

const getAllProducts = async () => {
  return await products.find().toArray();
};

const getProductById = async (id) => {
  return await products.findOne({ _id: new ObjectId(id) });
};

module.exports = { getAllProducts, getProductById };
