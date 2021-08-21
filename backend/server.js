const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// connect to mongodb
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(e => console.error(e));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB connected`)
})

// create app
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/hello', (req, res) => {
  res.json({message: 'Hello'});
});

const todoRoute = require('./route/todo');

app.use('/', todoRoute);