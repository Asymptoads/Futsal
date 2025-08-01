import express from "express";
import Court from "../models/court.mjs";

const router = express.Router();

router.post("/courts", async (req, res) => {
    try {
        const { name, location, capacity, pricePerHour } = req.body;
        const court = new Court({ name, location, capacity, pricePerHour });
        await court.save();
        res.status(201).json(court);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;