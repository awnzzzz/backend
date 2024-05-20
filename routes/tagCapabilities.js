import express from "express";
import TagCapability from "../models/tagCapability.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tagCapabilities = await TagCapability.find();
    res.json(tagCapabilities);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
