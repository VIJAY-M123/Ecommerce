const express = require('express')
const app = express();
app.use(express.json());

const products = require('./routes/product');
app.use("/app/v1/",products)

module.exports = app;