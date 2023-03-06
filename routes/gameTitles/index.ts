import express, { Router, Request, Response } from "express";
import { GameTitle } from "../../models/index.js";

const router: Router = express.Router();

router.post("/", async (req, res) => {
  const { titles } = req.body;
  if (!titles) {
    return res.status(400).json({ message: "Titles array is required" });
  }

  const newTitles = titles.map((title: string) => {
    return { title: title };
  });

  try {
    const gameTitles = await GameTitle.insertMany(newTitles);
    return res.status(201).json(gameTitles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating a game title" });
  }
});

router.get("/search", async (req, res) => {
  const query: string = req.query.q as string;  
  if (!query) {
    return res.status(400).json({ message: "Search query is missing" });
  }
  const cleanQuery = query
  .replace(/[^\w\s]/gi, '') // remove non-word and non-space characters
  .replace(/\s+/g, '\\s+') // replace spaces with \s+ for fuzzy search
  .replace(/[eéèêë]/gi, '[eéèêë]') // include variations of "e" with diacritical marks
  .replace(/[aàáâãäå]/gi, '[aàáâãäå]') // include variations of "a" with diacritical marks
  .replace(/[iíìîï]/gi, '[iíìîï]') // include variations of "i" with diacritical marks
  .replace(/[oóòôõö]/gi, '[oóòôõö]') // include variations of "o" with diacritical marks
  .replace(/[uúùûü]/gi, '[uúùûü]') // include variations of "u" with diacritical marks
  .replace(/[cç]/gi, '[cç]'); // include variations of "c" with diacritical marks

  const regex = new RegExp(cleanQuery, 'i');
  
  try {
    const results = await GameTitle.find( { title: regex } )


    if (results.length === 0) {
      return res.status(204).send();
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while searching for game titles" });
  }
});

export default router;
