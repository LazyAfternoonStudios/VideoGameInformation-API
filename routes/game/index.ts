import express, { Router, Request, Response } from "express";
import { Game } from "../../models/index.js";

// TODO: Design a fast search algo for the search bar

const router: Router = express.Router();

router.head("/", async (req: Request, res: Response) => {
  try {
    const count = await Game.count();
    res.set("X-Total-Count", count.toString());
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req: Request, res: Response) => {
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

router.get("/:gameId", async (req: Request, res: Response) => {
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
