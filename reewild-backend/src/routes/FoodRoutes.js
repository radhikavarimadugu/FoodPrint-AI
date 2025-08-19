import express from "express";
import Food from "../models/Food.js";
const router = express.Router();
router.post("/", async (req, res) => {
  const { name, calories, userId } = req.body;
  const food = new Food({ name, calories, createdBy: userId });
  await food.save();
  res.json(food);
});
router.get("/", async (req, res) => {
  const foods = await Food.find().populate("createdBy", "username");
  res.json(foods);
});
export default router;
