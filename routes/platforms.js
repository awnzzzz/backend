import express from "express";
import Platform from "../models/platform.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const platforms = await Platform.find();
    res.json(platforms);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
