const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productRoutes);

module.exports = app;