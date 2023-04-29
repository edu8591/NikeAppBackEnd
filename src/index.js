const express = require("express");
const productRoutes = require("./router/productRoutes");
const app = express();

const port = 3000;

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(port, () => {
  console.log("Api listening on port ", port);
});
