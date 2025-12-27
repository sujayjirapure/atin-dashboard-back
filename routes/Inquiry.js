import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Inquiry.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
