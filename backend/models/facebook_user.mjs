import mongoose from "mongoose";

const facebookUserSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        unique: true,
        required: true,
        trim: true,
    },
    facebookId: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
    }
});

export const FacebookUser = mongoose.model("FacebookUser", facebookUserSchema);