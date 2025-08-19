import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
export default mongoose.model("Food", foodSchema);
