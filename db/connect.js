import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    console.log("Terhubung ke database MongoDB");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
