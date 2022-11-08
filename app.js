const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});