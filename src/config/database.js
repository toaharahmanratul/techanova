import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
  } catch (error) {
    throw new Error("Error connecting to mongoose");
  }
};

export default connectDB;
