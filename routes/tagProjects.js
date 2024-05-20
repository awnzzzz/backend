import express from "express";
import TagProject from "../models/tagProject.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tagProjects = await TagProject.find();
    res.json(tagProjects);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
