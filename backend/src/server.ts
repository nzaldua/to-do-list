import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

// initialize mongodb connection
const uri = process.env.MONGODB_URI || '';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .catch((e) => console.error(e));
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB connected`);
});

// create app
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello' });
});

import { router as todoRoute } from './route/todo';

app.use('/', todoRoute);
