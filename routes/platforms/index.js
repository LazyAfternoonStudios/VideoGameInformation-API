import express from "express";
const router = express.Router();
import { Platform } from "../../models/index.js";

router.get("/", async (req, res) => {
  try {
    const platforms = await Platform.find({});

    res.status(200).json(platforms);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:platformId", async (req, res) => {
    const { platformId } = req.params;
  try {
    const platforms = await Platform.find({platformId: platformId});

    res.status(200).json(platforms);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
