import mongoose from "mongoose";

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.DBURL);
  isConnected = true;
}

const InquirySchema = new mongoose.Schema(
  {
    type: String,
    name: String,
    mobile: String,
    email: String,
    address: String,
    issue: String,
  },
  { timestamps: true }
);

const Inquiry =
  mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);

export async function handler(event) {
  await connectDB();

  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = await Inquiry.find().sort({ createdAt: -1 });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}
