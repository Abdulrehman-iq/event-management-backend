const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await config.connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
};

startServer();