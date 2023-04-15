import express, { Router, Request, Response } from "express";
import { GameTitle } from "../../models/index.js";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const limit: number = parseInt(req.query.limit as string) || 10;
  const offset: number = (parseInt(req.query.page as string) - 1) * limit || 0;

  try {
    const results = await GameTitle.find({}).limit(limit).skip(offset);
    console.log(results);

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

router.get("/search", async (req: Request, res: Response) => {
  const query: string = req.query.q as string;
  const limit: number = parseInt(req.query.limit as string) || 10;
  const offset: number = (parseInt(req.query.page as string) - 1) * limit || 0;
  if (!query) {
    return res.status(400).json({ message: "Search query is missing" });
  }
  const cleanQuery = query
    .replace(/[^\w\s]/gi, "") // remove non-word and non-space characters
    .replace(/\s+/g, "\\s+") // replace spaces with \s+ for fuzzy search
    .replace(/[eéèêë]/gi, "[eéèêë]") // include variations of "e" with diacritical marks
    .replace(/[aàáâãäå]/gi, "[aàáâãäå]") // include variations of "a" with diacritical marks
    .replace(/[iíìîï]/gi, "[iíìîï]") // include variations of "i" with diacritical marks
    .replace(/[oóòôõö]/gi, "[oóòôõö]") // include variations of "o" with diacritical marks
    .replace(/[uúùûü]/gi, "[uúùûü]") // include variations of "u" with diacritical marks
    .replace(/[cç]/gi, "[cç]"); // include variations of "c" with diacritical marks

  const regex = new RegExp(cleanQuery, "i");

  try {
    const results = await GameTitle.find({ title: regex })
      .limit(limit)
      .skip(offset);

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

router.get("/by-platform", async (req: Request, res: Response) => {
  const platform: string = req.query.platform as string;
  const limit: number = parseInt(req.query.limit as string) || 10;
  const offset: number = (parseInt(req.query.page as string) - 1) * limit || 0;
  if (!platform) {
    return res.status(400).json({ message: "Search query is missing" });
  }

  const regex = new RegExp(platform, "i");

  try {
    // search for game titles that have the platform in their platforms array
    const results = await GameTitle.find({ platforms: regex })
      .limit(limit)
      .skip(offset);

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

router.get("/with-content", async (req: Request, res: Response) => {
  const limit: number = parseInt(req.query.limit as string) || 10;
  const offset: number = (parseInt(req.query.page as string) - 1) * limit || 0;

  try {
    const results = await GameTitle.find({ lazyAfternoonContent: true })
      .sort({ contentAddedDate: -1 })
      .limit(limit)
      .skip(offset);

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

router.get("/:title", async (req: Request, res: Response) => {
  const title: string = req.params.title;

  try {
    const results = await GameTitle.findOne({title: title});
    console.log(results);

    if (!results) {
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
