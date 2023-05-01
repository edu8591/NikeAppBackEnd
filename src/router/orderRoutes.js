const express = require("express");
const router = express.Router();
const { getOrderByRef, createOrder } = require("../databse/orders");

router.get("/:reference", async (req, res) => {
  try {
    const { reference } = req.params;
    const order = await getOrderByRef(reference);
    if (order) {
      return res.status(200).send({ status: "OK", data: order });
    } else {
      return res
        .status(404)
        .send({ status: "FAILED", error: `Order not found` });
    }
  } catch (err) {}
});

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    body.ref = (Math.random() + 1).toString(36).substring(7);
    const order = await createOrder(body);
    res.status(201).send({ status: "OK", data: order });
  } catch (err) {}
});

module.exports = router;
