import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import inquiryRoutes from "./routes/Inquiry.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/inquiry", inquiryRoutes);

app.get("/", (req, res) => {
  res.send("Dashboard backend running");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
