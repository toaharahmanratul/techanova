import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("DB Connected successfully");
  } catch (error) {
    throw new Error("Error connecting to mongoose");
  }
};

export default connectDB;
