import mongoose from "mongoose";

const connectDatabase = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("Mongo URI is unavailable");
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connection established successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDatabase;
