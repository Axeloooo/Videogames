import mongoose from "mongoose";
import { MONGODB_URI } from "../config/database.config.js";

export async function connectDB() {
  const _ = await mongoose.connect(MONGODB_URI);
  console.log(`Connected to MongoDB: ${MONGODB_URI}`);
}
