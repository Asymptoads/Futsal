import express from "express";
import Futsal from "../models/futsal.mjs";
import cors from "cors";
const router = express.Router();

router.use(cors()); 

router.post("/futsals", async (req, res) => {
  try {
    const {
      name,
      address,
      location,
      description,
      contactNumber,
      openingTime,
      closingTime,
    } = req.body;
    const futsal = new Futsal({
      name,
      address,
      location,
      description,
      contactNumber,
      openingTime,
      closingTime,
    });
    await futsal.save();
    res.status(201).json(futsal);
  } catch (err) {
    console.error(err); 
    res.status(400).json({ error: err.message });
  }
});

export default router;
