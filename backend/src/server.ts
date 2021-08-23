import express from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

// Initialize mongodb connection
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

// Create app
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('*', (req, res) => {
  res.status(404).json({
    Error: `Page not found`,
  });
});

// Add router
import { router as todoRoute } from './route/todo';
app.use('/api', todoRoute);
