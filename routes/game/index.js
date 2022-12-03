import express from "express";
const router = express.Router();
import { Game } from "../../models/index.js";

router.get("/", async (req, res) => {
  try {
    const games = await Game.find({});
    // if games is empty, return 204
    if (games.length === 0) {
      return res.status(204).json();
    }
    // if there are games, return 200
    res.status(200).json(games);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:gameId", async (req, res) => {
  const { gameId } = req.params;
  try {
    const games = await Game.find({ gameId: gameId });
    // if games is empty, return 204
    if (games.length === 0) {
      return res.status(204).json();
    }
    // if there are games, return 200
    res.status(200).json(games);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  export default router;