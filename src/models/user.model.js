import mongoose from "mongoose";

const { Schema } = mongoose;

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dpURL: {
      type: String,
      default: "",
    },
    organization: {
      type: String,
      required: false,
      default: "",
    },
    occupation: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    verifyToken: {
      type: String,
    },
    verifyTokenExpiry: Date,
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userschema);
export default User;
