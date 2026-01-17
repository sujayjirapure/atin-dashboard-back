import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    type: String,
    name: String,
    mobile: String,
    email: String,
    address: String,
    issue: String,
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", InquirySchema);
