import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)

const carSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  priority: String,
  progress: String,
  status: String,
  active: String,
}, {
  timestamps: true,
});

export default mongoose.models.Car || mongoose.model("Car", carSchema);