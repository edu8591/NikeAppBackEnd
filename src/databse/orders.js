const { ObjectId } = require("mongodb");
const { orders } = require("./db");

const getOrderByRef = async (ref) => {
  return await orders.findOne({ ref });
};

const createOrder = async (order) => {
  // const newOrder =
  const result = await orders.insertOne(order);
  // console.log("result: ", result);
  return { ...order, _id: result.insertedId };
};
module.exports = { getOrderByRef, createOrder };
