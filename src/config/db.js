const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;
    
    if (!dbURI) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;