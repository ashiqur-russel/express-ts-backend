import mongoose from 'mongoose';
import config from '.';

const connectDatabase = async () => {
  const MONGO_URI = config.database_url as string;

  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connection established successfully.');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDatabase;
