import express from "express";
import Jhonbert from "../models/jhonbert.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const jhonbertes = await Jhonbert.find();
    res.json(jhonbertes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
