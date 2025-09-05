const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';

app.use(express.json());

const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('MongoDB connection failed:', err.message));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});