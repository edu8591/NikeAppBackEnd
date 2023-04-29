const { MongoClient } = require("mongodb");
require("dotenv").config();
const { DB_USER, DB_PASSWORD } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.slol30y.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const db = client.db("test");
const products = db.collection("products");
module.exports = { products };
