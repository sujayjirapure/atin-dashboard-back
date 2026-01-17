import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import inquiryRoutes from "./routes/Inquiry.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* DATABASE */
mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("Dashboard DB connected ✅"))
  .catch((err) => {
    console.error("MongoDB error ❌", err);
    process.exit(1);
  });

/* ROUTES */
app.use("/api/inquiries", inquiryRoutes);

/* HEALTH CHECK */
app.get("/", (req, res) => {
  res.send("Dashboard backend running 🚀");
});

/* START SERVER */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Dashboard server running on port ${PORT}`);
});
