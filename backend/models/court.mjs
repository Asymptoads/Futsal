import mongoose from "mongoose";

const courtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    pricePerHour: { type: Number, required: true }
});

export default mongoose.model("Court", courtSchema);