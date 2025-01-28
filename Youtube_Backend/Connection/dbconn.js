import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDb = async () => {
  try {
    
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connected to MongoDB using Mongoose');
  } catch (error) {
    console.error('Error connecting to MongoDB using Mongoose:', error);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('Mongoose connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Error closing Mongoose connection:', error);
    process.exit(1);
  }
});
