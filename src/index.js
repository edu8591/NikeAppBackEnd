const express = require("express");
const app = express();
const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");

const port = 3000;

app.use(express.json());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(port, () => {
  console.log("Api listening on port ", port);
});
