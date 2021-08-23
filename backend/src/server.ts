import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

require('dotenv').config();

// Initialize mongodb connection
const uri = process.env.MONGODB_URI || '';
(async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (e) {
    console.error(e);
  }
})();
const connection = mongoose.connection;
connection.once('open', () => {
  console.log(`MongoDB connected`);
});

// Create app
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Add router
import { router as todoRoute } from './route/todo';
app.use('/api', todoRoute);

app.get('*', (req, res) => {
  res.status(404).json({
    Error: `Page not found`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
