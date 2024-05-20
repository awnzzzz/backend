import express from "express";
import Capability from "../models/capability.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const capabilities = await Capability.find();
    res.json(capabilities);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedCapability = await Capability.findByIdAndDelete(req.params.id);

    if (!deletedCapability) {
      return res.status(404).json({ error: "Capability not found" });
    }

    res.json({ message: "Capability deleted successfully", deletedCapability });
  } catch (error) {
    console.error("Error deleting capability:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const capability = new Capability(req.body);
    const savedCapability = await capability.save();
    res.json(savedCapability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedCapability = await Capability.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedCapability) {
      return res.status(404).json({ error: 'Capability not found' });
    }

    res.json(updatedCapability);
  } catch (error) {
    console.error('Error updating capability:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
