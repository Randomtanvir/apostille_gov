import mongoose, { Schema } from "mongoose";

const ApplicationSchema = new Schema(
  {
    country: { type: String, required: true },
    signed: { type: String, required: true },
    capacity: { type: String, required: true },
    stamp: { type: String, required: true },
    date: { type: String, required: true },
    signDate: { type: String, required: true },
    image: [{ type: String }], // Array of image URLs or file paths
    QRcode: { type: String },
    time: { type: String },
    footerDate: { type: String },
    at: { type: String },
    by: { type: String },
    number: { type: String },
    digitallySigned: { type: String },
    status: { type: Boolean, default: false }, // true for approved, false for pending
  },
  {
    timestamps: true,
  }
);

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
export default Application;
