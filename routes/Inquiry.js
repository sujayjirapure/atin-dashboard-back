import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

/* GET ALL INQUIRIES */
router.get("/", async (req, res) => {
  try {
    const data = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
