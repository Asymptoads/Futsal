import mongoose from "mongoose";

const futsalSchema = new mongoose.Schema({
    futsalId: { type: String, required: false, unique: true },
    futsalOwner: { type: String, required: false },
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    contactNumber: { type: String, required: true },
    openingTime: { type: String, required: true },
    closingTime: { type: String, required: true },
    // capacity: { type: Number, required: true },
});

// Pre-save hook to auto-generate futsalId
futsalSchema.pre("save", async function (next) {
    if (this.futsalId) return next(); // Skip if already set

    const year = new Date().getFullYear();
    // Count futsals created this year
    const count = await mongoose.models.Futsal.countDocuments({
        futsalId: { $regex: `^${year}` }
    });

    // Pad the number to 2 digits (e.g., 01, 02)
    const number = String(count + 1).padStart(2, "0");
    this.futsalId = `${year}${number}`;
    next();
});

export default mongoose.model("Futsal", futsalSchema);