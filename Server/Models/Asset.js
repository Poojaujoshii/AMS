import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  s_no: { type: Number, unique: true, required: true },
  model: { type: String },
  imageUrl: { type: String },
  assetTag: { type: String, unique: true, required: true },
  status: {
    type: String,
    enum: ["Available", "Assigned", "Damaged"],
    default: "Available",
  },
  purchaseDate: { type: Date },
  warrantyExpiryDate: { type: Date },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee", // ✅ Make sure "Employee" model is also defined correctly
    default: null,
  },
}, { timestamps: true });

// ✅ Fix OverwriteModelError
const Asset = mongoose.models.Assets || mongoose.model("Assets", assetSchema);

export default Asset;
